const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const farmRoutes = require('./routes/farmRoutes');
const connectDB = require('./config/db'); // Importe la connexion à la base de données

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', farmRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});