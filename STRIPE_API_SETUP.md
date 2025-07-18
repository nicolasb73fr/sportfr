# Configuration des API Stripe pour FitTracker

## 1. Création du compte Stripe

### Étape 1 : Inscription
1. Allez sur https://stripe.com
2. Cliquez sur "Commencer maintenant" ou "Sign up"
3. Créez votre compte avec votre email professionnel
4. Vérifiez votre email

### Étape 2 : Configuration du compte
1. Connectez-vous à votre tableau de bord Stripe
2. Complétez les informations de votre entreprise
3. Ajoutez vos informations bancaires pour recevoir les paiements

## 2. Récupération des clés API

### Clés de test (pour le développement)
1. Dans le tableau de bord Stripe, allez dans "Développeurs" > "Clés API"
2. Assurez-vous d'être en mode "Test"
3. Copiez les clés suivantes :
   - **Clé publique** (commence par `pk_test_`)
   - **Clé secrète** (commence par `sk_test_`)

### Clés de production (pour le site en ligne)
1. Activez votre compte Stripe (vérification d'identité requise)
2. Basculez en mode "Live"
3. Copiez les clés de production :
   - **Clé publique** (commence par `pk_live_`)
   - **Clé secrète** (commence par `sk_live_`)

## 3. Configuration dans le code

### Frontend (script.js)
Remplacez cette ligne dans `script.js` :
```javascript
const STRIPE_PUBLIC_KEY = 'pk_test_51234567890abcdef'; // Remplacez par votre clé publique
```

Par votre vraie clé publique :
```javascript
const STRIPE_PUBLIC_KEY = 'pk_test_VOTRE_CLE_PUBLIQUE_ICI';
```

## 4. Création des produits et prix

### Via le tableau de bord Stripe
1. Allez dans "Produits" > "Ajouter un produit"
2. Créez deux produits :

#### Produit 1 : Premium Mensuel
- **Nom** : FitTracker Premium Mensuel
- **Prix** : 9,99 €
- **Récurrence** : Mensuelle
- **ID du prix** : Copiez l'ID généré (ex: `price_1234567890`)

#### Produit 2 : Premium Annuel
- **Nom** : FitTracker Premium Annuel
- **Prix** : 99,99 €
- **Récurrence** : Annuelle
- **ID du prix** : Copiez l'ID généré (ex: `price_0987654321`)

### Mise à jour du code
Remplacez les IDs dans `script.js` :
```javascript
const subscriptionPlans = {
    monthly: {
        name: 'Premium Mensuel',
        price: '9,99€',
        period: '/mois',
        amount: 999,
        priceId: 'VOTRE_PRICE_ID_MENSUEL', // Remplacez ici
        tax: 200
    },
    yearly: {
        name: 'Premium Annuel',
        price: '99,99€',
        period: '/an',
        amount: 9999,
        priceId: 'VOTRE_PRICE_ID_ANNUEL', // Remplacez ici
        tax: 2000
    }
};
```

## 5. Backend requis (PHP/Node.js/Python)

Le frontend actuel simule les paiements. Pour un vrai traitement, vous devez créer un backend.

### Exemple d'endpoint PHP (backend/process-payment.php)
```php
<?php
require_once 'vendor/autoload.php';

\Stripe\Stripe::setApiKey('sk_test_VOTRE_CLE_SECRETE');

header('Content-Type: application/json');

try {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Créer le client
    $customer = \Stripe\Customer::create([
        'email' => $input['email'],
        'source' => $input['token']
    ]);
    
    // Créer l'abonnement
    $subscription = \Stripe\Subscription::create([
        'customer' => $customer->id,
        'items' => [[
            'price' => $input['priceId'],
        ]],
    ]);
    
    echo json_encode([
        'success' => true,
        'subscription_id' => $subscription->id,
        'customer_id' => $customer->id
    ]);
    
} catch (\Stripe\Exception\CardException $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
```

### Exemple d'endpoint Node.js
```javascript
const stripe = require('stripe')('sk_test_VOTRE_CLE_SECRETE');

app.post('/create-subscription', async (req, res) => {
  try {
    const { email, token, priceId } = req.body;
    
    // Créer le client
    const customer = await stripe.customers.create({
      email: email,
      source: token
    });
    
    // Créer l'abonnement
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
    });
    
    res.json({
      success: true,
      subscription_id: subscription.id,
      customer_id: customer.id
    });
    
  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
});
```

## 6. Webhooks (Recommandé)

### Configuration des webhooks
1. Dans Stripe, allez dans "Développeurs" > "Webhooks"
2. Cliquez sur "Ajouter un endpoint"
3. URL : `https://votre-site.com/webhook-stripe.php`
4. Sélectionnez les événements :
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
   - `customer.subscription.deleted`

### Exemple de webhook PHP
```php
<?php
require_once 'vendor/autoload.php';

$endpoint_secret = 'whsec_VOTRE_WEBHOOK_SECRET';

$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];

try {
    $event = \Stripe\Webhook::constructEvent(
        $payload, $sig_header, $endpoint_secret
    );
} catch(\UnexpectedValueException $e) {
    http_response_code(400);
    exit();
}

// Gérer l'événement
switch ($event['type']) {
    case 'invoice.payment_succeeded':
        // Activer l'abonnement premium
        $subscription = $event['data']['object'];
        // Mettre à jour votre base de données
        break;
    case 'invoice.payment_failed':
        // Désactiver l'abonnement premium
        break;
    default:
        echo 'Received unknown event type ' . $event['type'];
}

http_response_code(200);
?>
```

## 7. Sécurité et bonnes pratiques

### Variables d'environnement
Ne jamais exposer vos clés secrètes dans le code frontend. Utilisez des variables d'environnement :

```bash
# .env
STRIPE_PUBLIC_KEY=pk_test_votre_cle_publique
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret
```

### HTTPS obligatoire
Stripe nécessite HTTPS en production. Assurez-vous que votre site utilise SSL.

### Validation côté serveur
Toujours valider les paiements côté serveur, jamais uniquement côté client.

## 8. Tests

### Cartes de test Stripe
Utilisez ces numéros de carte pour tester :

- **Succès** : 4242 4242 4242 4242
- **Échec** : 4000 0000 0000 0002
- **3D Secure** : 4000 0025 0000 3155

**Date d'expiration** : N'importe quelle date future
**CVC** : N'importe quel code à 3 chiffres

## 9. Mise en production

### Checklist avant la mise en ligne
- [ ] Compte Stripe activé et vérifié
- [ ] Clés de production configurées
- [ ] Webhooks configurés
- [ ] Tests de paiement effectués
- [ ] HTTPS activé
- [ ] Politique de confidentialité et CGV mises à jour

### Activation du compte
1. Complétez toutes les informations demandées par Stripe
2. Fournissez les documents d'identité requis
3. Attendez la validation (généralement 24-48h)

## 10. Support et documentation

### Ressources utiles
- **Documentation Stripe** : https://stripe.com/docs
- **API Reference** : https://stripe.com/docs/api
- **Support Stripe** : https://support.stripe.com
- **Status Stripe** : https://status.stripe.com

### Intégration JavaScript
La documentation complète pour Stripe.js : https://stripe.com/docs/js

## 11. Coûts Stripe

### Frais de transaction
- **Europe** : 1,4% + 0,25€ par transaction réussie
- **Cartes non-européennes** : 2,9% + 0,25€
- **Pas de frais d'installation ou mensuel**

### Abonnements
- Même tarification que les paiements uniques
- Gestion automatique des renouvellements
- Facturation pro-rata en cas de changement de plan

---

## Notes importantes

1. **Mode Test vs Production** : Toujours tester en mode test avant de passer en production
2. **Conformité PCI** : Stripe gère la conformité PCI DSS
3. **Devises** : Stripe supporte plus de 135 devises
4. **Taxes** : Stripe Tax peut calculer automatiquement les taxes

Pour toute question technique, consultez la documentation Stripe ou contactez leur support.
