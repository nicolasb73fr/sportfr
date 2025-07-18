// Gestionnaire Proxmox - Script principal
class ProxmoxManager {
    constructor() {
        this.config = null;
        this.authTicket = null;
        this.csrfToken = null;
        this.nodes = [];
        this.vms = [];
        this.refreshInterval = null;
        this.isConnected = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadSavedConfig();
        this.updateConnectionStatus(false);
    }
    
    setupEventListeners() {
        // Configuration Proxmox
        document.getElementById('proxmox-config').addEventListener('submit', (e) => {
            e.preventDefault();
            this.connect();
        });
        
        // Formulaire de création VM
        document.getElementById('create-vm-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.createVM();
        });
        
        // Auto-génération d'ID VM
        document.getElementById('vm-id').addEventListener('focus', () => {
            if (!document.getElementById('vm-id').value) {
                document.getElementById('vm-id').value = ProxmoxConfig.utils.generateVMID();
            }
        });
    }
    
    loadSavedConfig() {
        const saved = localStorage.getItem('proxmox-config');
        if (saved) {
            const config = JSON.parse(saved);
            document.getElementById('proxmox-host').value = config.host || '';
            document.getElementById('proxmox-port').value = config.port || 8006;
            document.getElementById('proxmox-username').value = config.username || '';
            // Ne pas sauvegarder le mot de passe pour des raisons de sécurité
        }
    }
    
    saveConfig() {
        const config = {
            host: document.getElementById('proxmox-host').value,
            port: document.getElementById('proxmox-port').value,
            username: document.getElementById('proxmox-username').value
        };
        localStorage.setItem('proxmox-config', JSON.stringify(config));
    }
    
    async connect() {
        const host = document.getElementById('proxmox-host').value;
        const port = document.getElementById('proxmox-port').value;
        const username = document.getElementById('proxmox-username').value;
        const password = document.getElementById('proxmox-password').value;
        
        if (!host || !username || !password) {
            this.showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }
        
        this.config = { host, port, username, password };
        
        try {
            this.showNotification('Connexion en cours...', 'info');
            
            // Authentification
            const authData = await this.authenticate();
            if (authData) {
                this.authTicket = authData.ticket;
                this.csrfToken = authData.CSRFPreventionToken;
                
                // Charger les nœuds
                await this.loadNodes();
                
                // Charger les VMs
                await this.loadVMs();
                
                this.isConnected = true;
                this.updateConnectionStatus(true);
                this.showDashboard();
                this.saveConfig();
                this.startAutoRefresh();
                
                this.showNotification(ProxmoxConfig.successMessages.connected, 'success');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            this.showNotification(ProxmoxConfig.errorMessages.connectionFailed, 'error');
            this.updateConnectionStatus(false);
        }
    }
    
    async authenticate() {
        const url = ProxmoxConfig.utils.buildUrl(
            this.config.host,
            this.config.port,
            ProxmoxConfig.endpoints.auth
        );
        
        const formData = new FormData();
        formData.append('username', this.config.username);
        formData.append('password', this.config.password);
        
        const response = await this.makeRequest(url, {
            method: 'POST',
            body: formData
        });
        
        return response.data;
    }
    
    async loadNodes() {
        const url = ProxmoxConfig.utils.buildUrl(
            this.config.host,
            this.config.port,
            ProxmoxConfig.endpoints.nodes
        );
        
        const response = await this.makeAuthenticatedRequest(url);
        this.nodes = response.data;
        
        // Mettre à jour les sélecteurs de nœuds
        this.updateNodeSelectors();
    }
    
    async loadVMs() {
        this.vms = [];
        
        for (const node of this.nodes) {
            // Charger les VMs QEMU
            try {
                const qemuUrl = ProxmoxConfig.utils.buildUrl(
                    this.config.host,
                    this.config.port,
                    ProxmoxConfig.utils.formatEndpoint(ProxmoxConfig.endpoints.qemu, { node: node.node })
                );
                
                const qemuResponse = await this.makeAuthenticatedRequest(qemuUrl);
                const qemuVMs = qemuResponse.data.map(vm => ({ ...vm, type: 'qemu', node: node.node }));
                this.vms.push(...qemuVMs);
            } catch (error) {
                console.warn(`Erreur lors du chargement des VMs QEMU pour le nœud ${node.node}:`, error);
            }
            
            // Charger les conteneurs LXC
            try {
                const lxcUrl = ProxmoxConfig.utils.buildUrl(
                    this.config.host,
                    this.config.port,
                    ProxmoxConfig.utils.formatEndpoint(ProxmoxConfig.endpoints.lxc, { node: node.node })
                );
                
                const lxcResponse = await this.makeAuthenticatedRequest(lxcUrl);
                const lxcVMs = lxcResponse.data.map(vm => ({ ...vm, type: 'lxc', node: node.node }));
                this.vms.push(...lxcVMs);
            } catch (error) {
                console.warn(`Erreur lors du chargement des conteneurs LXC pour le nœud ${node.node}:`, error);
            }
        }
        
        this.updateDashboard();
        this.updateVMTable();
    }
    
    updateNodeSelectors() {
        const nodeSelect = document.getElementById('vm-node');
        nodeSelect.innerHTML = '<option value="">Sélectionner un nœud</option>';
        
        this.nodes.forEach(node => {
            const option = document.createElement('option');
            option.value = node.node;
            option.textContent = `${node.node} (${node.status})`;
            nodeSelect.appendChild(option);
        });
    }
    
    updateDashboard() {
        const totalVMs = this.vms.length;
        const runningVMs = this.vms.filter(vm => vm.status === 'running').length;
        const lxcCount = this.vms.filter(vm => vm.type === 'lxc').length;
        const kvmCount = this.vms.filter(vm => vm.type === 'qemu').length;
        
        document.getElementById('total-vms').textContent = totalVMs;
        document.getElementById('running-vms').textContent = runningVMs;
        document.getElementById('lxc-count').textContent = lxcCount;
        document.getElementById('kvm-count').textContent = kvmCount;
    }
    
    updateVMTable() {
        const tbody = document.getElementById('vm-table-body');
        tbody.innerHTML = '';
        
        this.vms.forEach(vm => {
            const row = document.createElement('tr');
            
            const statusBadge = this.getStatusBadge(vm.status);
            const typeIcon = vm.type === 'lxc' ? 'fa-cube' : 'fa-server';
            
            row.innerHTML = `
                <td>${vm.vmid}</td>
                <td><i class="fas ${typeIcon}"></i> ${vm.name}</td>
                <td><span class="badge bg-secondary">${vm.type.toUpperCase()}</span></td>
                <td>${statusBadge}</td>
                <td>${vm.cpus || 'N/A'}</td>
                <td>${vm.maxmem ? ProxmoxConfig.utils.formatBytes(vm.maxmem) : 'N/A'}</td>
                <td>
                    <div class="btn-group" role="group">
                        ${this.getActionButtons(vm)}
                    </div>
                </td>
            `;
            
            tbody.appendChild(row);
        });
    }
    
    getStatusBadge(status) {
        const statusMap = {
            'running': '<span class="badge badge-running">En cours</span>',
            'stopped': '<span class="badge badge-stopped">Arrêtée</span>',
            'paused': '<span class="badge badge-paused">En pause</span>'
        };
        return statusMap[status] || '<span class="badge bg-secondary">Inconnu</span>';
    }
    
    getActionButtons(vm) {
        const buttons = [];
        
        if (vm.status === 'running') {
            buttons.push(`<button class="btn btn-warning btn-sm" onclick="proxmoxManager.stopVM('${vm.vmid}', '${vm.type}', '${vm.node}')"><i class="fas fa-stop"></i></button>`);
            buttons.push(`<button class="btn btn-info btn-sm" onclick="proxmoxManager.rebootVM('${vm.vmid}', '${vm.type}', '${vm.node}')"><i class="fas fa-redo"></i></button>`);
            buttons.push(`<button class="btn btn-primary btn-sm" onclick="proxmoxManager.openVNC('${vm.vmid}', '${vm.type}', '${vm.node}')"><i class="fas fa-desktop"></i></button>`);
        } else {
            buttons.push(`<button class="btn btn-success btn-sm" onclick="proxmoxManager.startVM('${vm.vmid}', '${vm.type}', '${vm.node}')"><i class="fas fa-play"></i></button>`);
        }
        
        buttons.push(`<button class="btn btn-danger btn-sm" onclick="proxmoxManager.deleteVM('${vm.vmid}', '${vm.type}', '${vm.node}')"><i class="fas fa-trash"></i></button>`);
        
        return buttons.join(' ');
    }
    
    async startVM(vmid, type, node) {
        try {
            const endpoint = type === 'lxc' ? ProxmoxConfig.endpoints.lxcStart : ProxmoxConfig.endpoints.start;
            const url = ProxmoxConfig.utils.buildUrl(
                this.config.host,
                this.config.port,
                ProxmoxConfig.utils.formatEndpoint(endpoint, { node, vmid })
            );
            
            await this.makeAuthenticatedRequest(url, { method: 'POST' });
            this.showNotification(`VM ${vmid} démarrée`, 'success');
            
            // Actualiser après un délai
            setTimeout(() => this.loadVMs(), 2000);
        } catch (error) {
            console.error('Erreur lors du démarrage:', error);
            this.showNotification(`Erreur lors du démarrage de la VM ${vmid}`, 'error');
        }
    }
    
    async stopVM(vmid, type, node) {
        try {
            const endpoint = type === 'lxc' ? ProxmoxConfig.endpoints.lxcShutdown : ProxmoxConfig.endpoints.shutdown;
            const url = ProxmoxConfig.utils.buildUrl(
                this.config.host,
                this.config.port,
                ProxmoxConfig.utils.formatEndpoint(endpoint, { node, vmid })
            );
            
            await this.makeAuthenticatedRequest(url, { method: 'POST' });
            this.showNotification(`VM ${vmid} en cours d'arrêt`, 'success');
            
            // Actualiser après un délai
            setTimeout(() => this.loadVMs(), 2000);
        } catch (error) {
            console.error('Erreur lors de l\'arrêt:', error);
            this.showNotification(`Erreur lors de l'arrêt de la VM ${vmid}`, 'error');
        }
    }
    
    async rebootVM(vmid, type, node) {
        try {
            const endpoint = type === 'lxc' ? ProxmoxConfig.endpoints.lxcReboot : ProxmoxConfig.endpoints.reboot;
            const url = ProxmoxConfig.utils.buildUrl(
                this.config.host,
                this.config.port,
                ProxmoxConfig.utils.formatEndpoint(endpoint, { node, vmid })
            );
            
            await this.makeAuthenticatedRequest(url, { method: 'POST' });
            this.showNotification(`VM ${vmid} en cours de redémarrage`, 'success');
            
            // Actualiser après un délai
            setTimeout(() => this.loadVMs(), 3000);
        } catch (error) {
            console.error('Erreur lors du redémarrage:', error);
            this.showNotification(`Erreur lors du redémarrage de la VM ${vmid}`, 'error');
        }
    }
    
    async deleteVM(vmid, type, node) {
        if (!confirm(`Êtes-vous sûr de vouloir supprimer la VM ${vmid} ? Cette action est irréversible.`)) {
            return;
        }
        
        try {
            const endpoint = type === 'lxc' ? ProxmoxConfig.endpoints.deleteLxc : ProxmoxConfig.endpoints.deleteQemu;
            const url = ProxmoxConfig.utils.buildUrl(
                this.config.host,
                this.config.port,
                ProxmoxConfig.utils.formatEndpoint(endpoint, { node, vmid })
            );
            
            await this.makeAuthenticatedRequest(url, { method: 'DELETE' });
            this.showNotification(`VM ${vmid} supprimée`, 'success');
            
            // Actualiser immédiatement
            this.loadVMs();
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            this.showNotification(`Erreur lors de la suppression de la VM ${vmid}`, 'error');
        }
    }
    
    openVNC(vmid, type, node) {
        const vncUrl = `vnc.html?vmid=${vmid}&type=${type}&node=${node}&host=${this.config.host}&port=${this.config.port}`;
        window.open(vncUrl, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes');
    }
    
    showCreateVMModal(type) {
        document.getElementById('vm-type').value = type;
        document.getElementById('createVMModalTitle').textContent = 
            type === 'lxc' ? 'Créer un conteneur LXC' : 'Créer une VM KVM';
        
        // Afficher/masquer les sections spécifiques
        document.getElementById('lxc-specific').style.display = type === 'lxc' ? 'block' : 'none';
        document.getElementById('kvm-specific').style.display = type === 'kvm' ? 'block' : 'none';
        
        // Charger les templates/ISOs
        if (type === 'lxc') {
            this.loadLXCTemplates();
        } else {
            this.loadISOs();
        }
        
        // Afficher le modal
        const modal = new bootstrap.Modal(document.getElementById('createVMModal'));
        modal.show();
    }
    
    loadLXCTemplates() {
        const select = document.getElementById('lxc-template');
        select.innerHTML = '<option value="">Sélectionner un template</option>';
        
        ProxmoxConfig.lxcTemplates.forEach(template => {
            const option = document.createElement('option');
            option.value = template.template;
            option.textContent = template.name;
            select.appendChild(option);
        });
    }
    
    loadISOs() {
        const select = document.getElementById('kvm-iso');
        select.innerHTML = '<option value="">Sélectionner une ISO</option>';
        
        // Ici vous pourriez charger les ISOs disponibles depuis Proxmox
        // Pour l'exemple, on ajoute quelques options statiques
        const isos = [
            'ubuntu-22.04-desktop-amd64.iso',
            'debian-11.0.0-amd64-netinst.iso',
            'windows-10.iso',
            'centos-8-x86_64-minimal.iso'
        ];
        
        isos.forEach(iso => {
            const option = document.createElement('option');
            option.value = iso;
            option.textContent = iso;
            select.appendChild(option);
        });
    }
    
    async createVM() {
        const type = document.getElementById('vm-type').value;
        const vmid = document.getElementById('vm-id').value;
        const name = document.getElementById('vm-name').value;
        const cpu = document.getElementById('vm-cpu').value;
        const memory = document.getElementById('vm-memory').value;
        const storage = document.getElementById('vm-storage').value;
        const node = document.getElementById('vm-node').value;
        
        if (!vmid || !name || !node) {
            this.showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        try {
            let endpoint, data;
            
            if (type === 'lxc') {
                const template = document.getElementById('lxc-template').value;
                if (!template) {
                    this.showNotification('Veuillez sélectionner un template LXC', 'error');
                    return;
                }
                
                endpoint = ProxmoxConfig.utils.formatEndpoint(ProxmoxConfig.endpoints.createLxc, { node });
                data = {
                    vmid: vmid,
                    hostname: name,
                    memory: memory,
                    swap: memory,
                    cores: cpu,
                    rootfs: `local:${storage}`,
                    ostemplate: `local:vztmpl/${template}`,
                    ...ProxmoxConfig.defaultResources.lxc
                };
            } else {
                const iso = document.getElementById('kvm-iso').value;
                
                endpoint = ProxmoxConfig.utils.formatEndpoint(ProxmoxConfig.endpoints.createQemu, { node });
                data = {
                    vmid: vmid,
                    name: name,
                    memory: memory,
                    cores: cpu,
                    scsi0: `local:${storage}`,
                    ide2: iso ? `local:iso/${iso},media=cdrom` : '',
                    ...ProxmoxConfig.defaultResources.kvm
                };
            }
            
            const url = ProxmoxConfig.utils.buildUrl(this.config.host, this.config.port, endpoint);
            
            this.showNotification('Création de la VM en cours...', 'info');
            
            await this.makeAuthenticatedRequest(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data)
            });
            
            this.showNotification(ProxmoxConfig.successMessages.vmCreated, 'success');
            
            // Fermer le modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('createVMModal'));
            modal.hide();
            
            // Réinitialiser le formulaire
            document.getElementById('create-vm-form').reset();
            
            // Actualiser la liste
            setTimeout(() => this.loadVMs(), 3000);
            
        } catch (error) {
            console.error('Erreur lors de la création:', error);
            this.showNotification('Erreur lors de la création de la VM', 'error');
        }
    }
    
    async makeRequest(url, options = {}) {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            ...options
        };
        
        // Désactiver la vérification SSL pour les environnements de développement
        if (url.startsWith('https://')) {
            defaultOptions.agent = false;
        }
        
        const response = await fetch(url, defaultOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    async makeAuthenticatedRequest(url, options = {}) {
        const authOptions = {
            ...options,
            headers: {
                'Accept': 'application/json',
                'CSRFPreventionToken': this.csrfToken,
                'Cookie': `PVEAuthCookie=${this.authTicket}`,
                ...options.headers
            }
        };
        
        return await this.makeRequest(url, authOptions);
    }
    
    updateConnectionStatus(connected) {
        const statusElement = document.getElementById('connection-status');
        if (connected) {
            statusElement.innerHTML = '<i class="fas fa-circle text-connected"></i> Connecté';
            statusElement.className = 'navbar-text text-connected';
        } else {
            statusElement.innerHTML = '<i class="fas fa-circle text-disconnected"></i> Déconnecté';
            statusElement.className = 'navbar-text text-disconnected';
        }
    }
    
    showDashboard() {
        document.getElementById('config-section').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block';
        document.getElementById('actions-section').style.display = 'block';
        document.getElementById('vm-list-section').style.display = 'block';
    }
    
    startAutoRefresh() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        
        this.refreshInterval = setInterval(() => {
            if (this.isConnected) {
                this.loadVMs();
            }
        }, ProxmoxConfig.refreshIntervals.vmList);
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type} alert alert-dismissible fade show`;
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-suppression après 5 secondes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    refreshVMList() {
        if (this.isConnected) {
            this.showNotification('Actualisation en cours...', 'info');
            this.loadVMs();
        }
    }
}

// Fonctions globales pour les événements
function showCreateVMModal(type) {
    proxmoxManager.showCreateVMModal(type);
}

function createVM() {
    proxmoxManager.createVM();
}

function refreshVMList() {
    proxmoxManager.refreshVMList();
}

// Initialisation
let proxmoxManager;

document.addEventListener('DOMContentLoaded', function() {
    proxmoxManager = new ProxmoxManager();
});
