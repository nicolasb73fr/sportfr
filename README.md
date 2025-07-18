# Gestionnaire Proxmox Web

Un gestionnaire web moderne pour Proxmox VE permettant de créer, gérer et accéder aux machines virtuelles LXC et KVM via une interface web intuitive.

## 🚀 Fonctionnalités

### Gestion des VMs
- ✅ **Création de VMs** : Créez facilement des conteneurs LXC et des VMs KVM
- ✅ **Contrôle des VMs** : Démarrer, arrêter, redémarrer et supprimer les VMs
- ✅ **Monitoring en temps réel** : Surveillance du statut et des ressources
- ✅ **Dashboard interactif** : Vue d'ensemble de votre infrastructure

### Accès VNC
- ✅ **Console VNC intégrée** : Accès direct aux VMs via le navigateur
- ✅ **Contrôles avancés** : Ctrl+Alt+Del, capture d'écran, presse-papiers
- ✅ **Mode plein écran** : Interface immersive pour l'administration
- ✅ **Paramètres personnalisables** : Qualité, compression, mode lecture seule

### Interface moderne
- ✅ **Design responsive** : Compatible mobile et desktop
- ✅ **Interface intuitive** : Navigation simple et efficace
- ✅ **Notifications en temps réel** : Feedback immédiat des actions
- ✅ **Thème sombre/clair** : Adaptation à vos préférences

## 📋 Prérequis

- **Proxmox VE** 6.0+ avec API activée
- **Navigateur moderne** supportant WebSockets
- **Certificat SSL** (recommandé pour la production)

## 🛠️ Installation

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/proxmox-web-manager.git
cd proxmox-web-manager
```

### 2. Configuration Proxmox

#### Activer l'API Proxmox
```bash
# Sur votre serveur Proxmox
pveum user add webmanager@pve
pveum passwd webmanager@pve
pveum aclmod / -user webmanager@pve -role Administrator
```

#### Configurer CORS (si nécessaire)
Ajoutez dans `/etc/pve/local/pveproxy.conf` :
```
POLICY: cors=1
```

### 3. Déploiement

#### Option A: GitHub Pages
1. Forkez ce repository
2. Activez GitHub Pages dans les paramètres
3. Accédez à `https://votre-username.github.io/proxmox-web-manager`

#### Option B: Serveur web local
```bash
# Avec Python
python -m http.server 8080

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8080
```

#### Option C: Nginx
```nginx
server {
    listen 80;
    server_name proxmox-manager.local;
    root /path/to/proxmox-web-manager;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 🔧 Configuration

### Première connexion
1. Ouvrez l'interface web
2. Renseignez les informations de votre serveur Proxmox :
   - **Serveur** : IP ou nom d'hôte de votre Proxmox
   - **Port** : 8006 (par défaut)
   - **Utilisateur** : root@pam ou utilisateur créé
   - **Mot de passe** : Mot de passe de l'utilisateur

### Configuration avancée

#### Templates LXC personnalisés
Modifiez `config.js` pour ajouter vos templates :
```javascript
lxcTemplates: [
    { name: 'Mon Template', template: 'local:vztmpl/mon-template.tar.gz' },
    // ...
]
```

#### ISOs personnalisées
Les ISOs sont automatiquement détectées depuis votre stockage Proxmox.

## 📱 Utilisation

### Créer une VM LXC
1. Cliquez sur "Créer LXC"
2. Remplissez les informations :
   - ID VM (auto-généré)
   - Nom de la VM
   - Ressources (CPU, RAM, Stockage)
   - Template LXC
3. Sélectionnez le nœud de destination
4. Cliquez sur "Créer"

### Créer une VM KVM
1. Cliquez sur "Créer VM KVM"
2. Configurez :
   - ID VM et nom
   - Ressources système
   - ISO d'installation
   - Nœud de destination
3. Lancez la création

### Accès VNC
1. Démarrez votre VM
2. Cliquez sur l'icône 🖥️ dans la liste des VMs
3. Une nouvelle fenêtre s'ouvre avec la console VNC
4. Utilisez les contrôles pour interagir avec la VM

### Raccourcis clavier VNC
- **Ctrl+Alt+Del** : Redémarrage système
- **F11** : Plein écran
- **Échap** : Sortir du plein écran

## 🔒 Sécurité

### Recommandations
- ✅ Utilisez HTTPS en production
- ✅ Créez un utilisateur dédié avec permissions limitées
- ✅ Configurez un pare-feu approprié
- ✅ Utilisez des mots de passe forts
- ✅ Activez l'authentification à deux facteurs sur Proxmox

### Configuration utilisateur Proxmox
```bash
# Créer un utilisateur avec permissions limitées
pveum user add webmanager@pve --comment "Web Manager User"
pveum passwd webmanager@pve

# Créer un rôle personnalisé
pveum role add WebManager -privs "VM.Allocate,VM.Audit,VM.Console,VM.PowerMgmt,Datastore.Audit"
pveum aclmod / -user webmanager@pve -role WebManager
```

## 🐛 Dépannage

### Problèmes de connexion
```
Erreur: "Impossible de se connecter au serveur Proxmox"
```
**Solutions :**
- Vérifiez l'IP et le port du serveur
- Contrôlez que l'API Proxmox est activée
- Vérifiez les certificats SSL
- Testez la connectivité réseau

### Problèmes CORS
```
Erreur: "CORS policy blocked"
```
**Solutions :**
- Configurez CORS dans Proxmox
- Utilisez un proxy reverse
- Déployez sur le même domaine que Proxmox

### VNC ne fonctionne pas
```
Erreur: "Connexion VNC fermée"
```
**Solutions :**
- Vérifiez que la VM est démarrée
- Contrôlez les ports VNC (5900-5999)
- Vérifiez les permissions utilisateur
- Testez avec noVNC natif de Proxmox

## 🔄 API Proxmox utilisée

### Endpoints principaux
- `GET /api2/json/access/ticket` - Authentification
- `GET /api2/json/nodes` - Liste des nœuds
- `GET /api2/json/nodes/{node}/qemu` - VMs KVM
- `GET /api2/json/nodes/{node}/lxc` - Conteneurs LXC
- `POST /api2/json/nodes/{node}/qemu` - Créer VM KVM
- `POST /api2/json/nodes/{node}/lxc` - Créer conteneur LXC
- `POST /api2/json/nodes/{node}/qemu/{vmid}/status/start` - Démarrer VM
- `POST /api2/json/nodes/{node}/qemu/{vmid}/vncproxy` - Proxy VNC

## 🤝 Contribution

Les contributions sont les bienvenues ! 

### Comment contribuer
1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Développement local
```bash
# Cloner le repo
git clone https://github.com/votre-username/proxmox-web-manager.git
cd proxmox-web-manager

# Lancer un serveur de développement
python -m http.server 8080

# Ouvrir dans le navigateur
open http://localhost:8080
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [Proxmox VE](https://www.proxmox.com/) - Plateforme de virtualisation
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Icônes
- [noVNC](https://novnc.com/) - Client VNC HTML5

## 📞 Support

- 📧 **Email** : support@votre-domaine.com
- 🐛 **Issues** : [GitHub Issues](https://github.com/votre-username/proxmox-web-manager/issues)
- 📖 **Documentation** : [Wiki](https://github.com/votre-username/proxmox-web-manager/wiki)
- 💬 **Discord** : [Serveur Discord](https://discord.gg/votre-invite)

## 🗺️ Roadmap

### Version 2.0
- [ ] Support multi-cluster Proxmox
- [ ] Gestion des snapshots
- [ ] Monitoring avancé avec graphiques
- [ ] Templates de VMs personnalisés
- [ ] Sauvegarde automatisée
- [ ] API REST complète
- [ ] Application mobile

### Version 1.5
- [ ] Gestion des utilisateurs et permissions
- [ ] Logs d'audit
- [ ] Notifications push
- [ ] Thèmes personnalisables
- [ ] Export/Import de configurations

---

**⭐ Si ce projet vous aide, n'hésitez pas à lui donner une étoile !**

Made with ❤️ for the Proxmox community
