const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/farm', upload.single('file'), farmController.farm);

module.exports = router;