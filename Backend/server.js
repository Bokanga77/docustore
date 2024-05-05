// Import des dépendances
const express = require('express');
const fs = require('fs');

// Création de l'application Express
const app = express();
const port = 3000; // Port sur lequel le serveur va écouter

// Middleware pour analyser le corps de la requête
app.use(express.json());

// Endpoint pour l'enregistrement des données utilisateur
app.post('/api/saveUserData', (req, res) => {
  // Récupérer les données utilisateur à partir du corps de la requête
  const userData = req.body;
  // Enregistrer les données dans data.json
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    jsonData.push(userData);
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) throw err;
      console.log('Données utilisateur enregistrées avec succès');
      res.sendStatus(200); // Réponse HTTP 200 OK
    });
  });
});

// Endpoint pour la connexion de l'utilisateur
app.post('/api/userLogin', (req, res) => {
  const { email, password } = req.body;
  // Lire les données utilisateur à partir de data.json
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    // Vérifier si l'email et le mot de passe correspondent
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log('Connexion réussie');
      res.sendStatus(200); // Réponse HTTP 200 OK
    } else {
      console.log('Email ou mot de passe incorrect');
      res.sendStatus(401); // Réponse HTTP 401 Unauthorized
    }
  });
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
