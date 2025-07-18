# 🔑 Configuration Google OAuth pour FitTracker

## Étapes pour Obtenir une Clé API Google

### 1. Créer un Projet Google Cloud
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Sélectionner un projet"** puis **"Nouveau projet"**
4. Donnez un nom à votre projet (ex: "FitTracker-Auth")
5. Cliquez sur **"Créer"**

### 2. Activer l'API Google Identity
1. Dans le menu de gauche, allez dans **"APIs et services" > "Bibliothèque"**
2. Recherchez **"Google Identity"** ou **"Google+ API"**
3. Cliquez sur l'API et appuyez sur **"Activer"**

### 3. Configurer l'Écran de Consentement OAuth
1. Allez dans **"APIs et services" > "Écran de consentement OAuth"**
2. Choisissez **"Externe"** (sauf si vous avez un domaine Google Workspace)
3. Remplissez les informations requises :
   - **Nom de l'application** : FitTracker
   - **E-mail d'assistance utilisateur** : votre email
   - **E-mail de contact du développeur** : votre email
4. Cliquez sur **"Enregistrer et continuer"**
5. Dans "Champs d'application", cliquez sur **"Enregistrer et continuer"**
6. Dans "Utilisateurs de test", ajoutez votre email si nécessaire

### 4. Créer les Identifiants OAuth 2.0
1. Allez dans **"APIs et services" > "Identifiants"**
2. Cliquez sur **"+ Créer des identifiants"** > **"ID client OAuth 2.0"**
3. Choisissez **"Application Web"**
4. Configurez :
   - **Nom** : FitTracker Web Client
   - **Origines JavaScript autorisées** :
     - `http://localhost` (pour les tests locaux)
     - `http://127.0.0.1`
     - `file://` (pour ouvrir le fichier HTML directement)
     - Votre domaine final si vous hébergez le site
   - **URI de redirection autorisés** : (laissez vide pour l'instant)

### 5. Récupérer le Client ID
1. Une fois créé, vous verrez une popup avec vos identifiants
2. **Copiez le Client ID** (ressemble à : `123456789-abcdefg.apps.googleusercontent.com`)
3. Vous pouvez aussi le retrouver dans la liste des identifiants

### 6. Configurer le Code
1. Ouvrez le fichier `script.js`
2. Trouvez la ligne :
   ```javascript
   const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
   ```
3. Remplacez `YOUR_GOOGLE_CLIENT_ID` par votre vrai Client ID :
   ```javascript
   const GOOGLE_CLIENT_ID = '123456789-abcdefg.apps.googleusercontent.com';
   ```

## 🧪 Test de la Configuration

### Pour tester localement :
1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur "Connexion" puis "Continuer avec Google"
3. Une popup Google devrait s'ouvrir pour l'authentification

### Si ça ne fonctionne pas :
- Vérifiez que le Client ID est correct
- Assurez-vous que l'origine de votre site est dans les "Origines JavaScript autorisées"
- Ouvrez la console du navigateur (F12) pour voir les erreurs

## 🔒 Sécurité

- **Le Client ID peut être public** - il n'y a pas de problème de sécurité
- **Ne partagez jamais le Client Secret** (mais nous n'en avons pas besoin ici)
- Les utilisateurs devront autoriser votre application lors de la première connexion

## 📝 Notes Importantes

- **Domaine de test** : En mode développement, Google peut afficher un avertissement "Cette app n'est pas vérifiée"
- **Publication** : Pour un site en production, vous devrez peut-être faire vérifier votre app par Google
- **Limites** : Google a des quotas sur les requêtes API (généralement suffisants pour un usage normal)

## 🆘 Dépannage

### Erreur "redirect_uri_mismatch"
- Ajoutez l'URL exacte de votre site dans "URI de redirection autorisés"

### Erreur "origin_mismatch"  
- Ajoutez l'origine exacte dans "Origines JavaScript autorisées"

### Le bouton Google ne s'affiche pas
- Vérifiez la console pour les erreurs JavaScript
- Assurez-vous que le script Google est bien chargé

---

Une fois configuré, votre site aura une authentification Google complètement fonctionnelle ! 🎉
