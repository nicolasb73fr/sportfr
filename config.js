// Configuration pour le gestionnaire Proxmox
const ProxmoxConfig = {
    // Configuration par défaut
    defaults: {
        port: 8006,
        protocol: 'https',
        timeout: 30000,
        retryAttempts: 3
    },
    
    // Endpoints API Proxmox
    endpoints: {
        auth: '/api2/json/access/ticket',
        nodes: '/api2/json/nodes',
        qemu: '/api2/json/nodes/{node}/qemu',
        lxc: '/api2/json/nodes/{node}/lxc',
        storage: '/api2/json/nodes/{node}/storage',
        templates: '/api2/json/nodes/{node}/aplinfo',
        iso: '/api2/json/nodes/{node}/storage/{storage}/content',
        vnc: '/api2/json/nodes/{node}/qemu/{vmid}/vncproxy',
        lxcVnc: '/api2/json/nodes/{node}/lxc/{vmid}/vncproxy',
        status: '/api2/json/nodes/{node}/qemu/{vmid}/status/current',
        lxcStatus: '/api2/json/nodes/{node}/lxc/{vmid}/status/current',
        start: '/api2/json/nodes/{node}/qemu/{vmid}/status/start',
        stop: '/api2/json/nodes/{node}/qemu/{vmid}/status/stop',
        shutdown: '/api2/json/nodes/{node}/qemu/{vmid}/status/shutdown',
        reboot: '/api2/json/nodes/{node}/qemu/{vmid}/status/reboot',
        lxcStart: '/api2/json/nodes/{node}/lxc/{vmid}/status/start',
        lxcStop: '/api2/json/nodes/{node}/lxc/{vmid}/status/stop',
        lxcShutdown: '/api2/json/nodes/{node}/lxc/{vmid}/status/shutdown',
        lxcReboot: '/api2/json/nodes/{node}/lxc/{vmid}/status/reboot',
        createQemu: '/api2/json/nodes/{node}/qemu',
        createLxc: '/api2/json/nodes/{node}/lxc',
        deleteQemu: '/api2/json/nodes/{node}/qemu/{vmid}',
        deleteLxc: '/api2/json/nodes/{node}/lxc/{vmid}'
    },
    
    // Templates LXC populaires
    lxcTemplates: [
        { name: 'Ubuntu 22.04', template: 'ubuntu-22.04-standard' },
        { name: 'Ubuntu 20.04', template: 'ubuntu-20.04-standard' },
        { name: 'Debian 11', template: 'debian-11-standard' },
        { name: 'Debian 10', template: 'debian-10-standard' },
        { name: 'CentOS 8', template: 'centos-8-default' },
        { name: 'Alpine Linux', template: 'alpine-3.16-default' },
        { name: 'Fedora 36', template: 'fedora-36-default' }
    ],
    
    // Configuration VNC
    vnc: {
        port: 5900,
        websocketPort: 6080,
        path: '/websockify',
        autoconnect: true,
        viewOnly: false,
        quality: 6,
        compression: 2
    },
    
    // Messages d'erreur
    errorMessages: {
        connectionFailed: 'Impossible de se connecter au serveur Proxmox',
        authFailed: 'Échec de l\'authentification',
        vmNotFound: 'Machine virtuelle introuvable',
        actionFailed: 'Échec de l\'action',
        networkError: 'Erreur réseau',
        timeout: 'Délai d\'attente dépassé',
        invalidConfig: 'Configuration invalide',
        permissionDenied: 'Permission refusée'
    },
    
    // Messages de succès
    successMessages: {
        connected: 'Connexion établie avec succès',
        vmCreated: 'Machine virtuelle créée avec succès',
        vmStarted: 'Machine virtuelle démarrée',
        vmStopped: 'Machine virtuelle arrêtée',
        vmDeleted: 'Machine virtuelle supprimée',
        actionCompleted: 'Action terminée avec succès'
    },
    
    // Configuration des ressources par défaut
    defaultResources: {
        lxc: {
            memory: 512,
            swap: 512,
            disk: 8,
            cores: 1,
            ostype: 'ubuntu',
            arch: 'amd64',
            unprivileged: 1,
            onboot: 0,
            protection: 0
        },
        kvm: {
            memory: 1024,
            cores: 1,
            sockets: 1,
            disk: 20,
            ostype: 'l26',
            arch: 'x86_64',
            kvm: 1,
            onboot: 0,
            protection: 0,
            boot: 'cdn',
            scsihw: 'virtio-scsi-pci',
            net0: 'virtio,bridge=vmbr0'
        }
    },
    
    // Intervalles de rafraîchissement (en millisecondes)
    refreshIntervals: {
        vmList: 10000,      // 10 secondes
        vmStatus: 5000,     // 5 secondes
        resources: 30000,   // 30 secondes
        dashboard: 15000    // 15 secondes
    },
    
    // Validation des paramètres
    validation: {
        vmid: {
            min: 100,
            max: 999999999
        },
        memory: {
            min: 128,
            max: 1048576  // 1TB
        },
        disk: {
            min: 1,
            max: 1048576  // 1TB
        },
        cores: {
            min: 1,
            max: 128
        }
    },
    
    // Utilitaires
    utils: {
        // Construire l'URL complète
        buildUrl: function(host, port, endpoint) {
            const protocol = this.defaults.protocol;
            return `${protocol}://${host}:${port}${endpoint}`;
        },
        
        // Remplacer les paramètres dans l'endpoint
        formatEndpoint: function(endpoint, params) {
            let formatted = endpoint;
            for (const [key, value] of Object.entries(params)) {
                formatted = formatted.replace(`{${key}}`, value);
            }
            return formatted;
        },
        
        // Valider la configuration
        validateConfig: function(config) {
            if (!config.host || !config.username || !config.password) {
                return false;
            }
            return true;
        },
        
        // Formater la taille en octets
        formatBytes: function(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        
        // Formater le temps de fonctionnement
        formatUptime: function(seconds) {
            const days = Math.floor(seconds / 86400);
            const hours = Math.floor((seconds % 86400) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            
            if (days > 0) {
                return `${days}j ${hours}h ${minutes}m`;
            } else if (hours > 0) {
                return `${hours}h ${minutes}m`;
            } else {
                return `${minutes}m`;
            }
        },
        
        // Générer un ID VM aléatoire
        generateVMID: function() {
            return Math.floor(Math.random() * (9999 - 1000) + 1000);
        }
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProxmoxConfig;
}
