const fs = require('fs');
const path = require('path');

exports.farm = (req, res) => {
    const file = req.file;
    const platform = req.body.platform;

    if (!file) {
        return res.status(400).json({ message: 'Aucun fichier uploadé.' });
    }

    // Lire le fichier uploadé
    const fileContent = fs.readFileSync(file.path, 'utf8');
    console.log(`Farming ${platform} avec le fichier : ${fileContent}`);

    // Simuler une réponse de l'API du jeu
    res.json({ message: `Farming ${platform} réussi !` });
};