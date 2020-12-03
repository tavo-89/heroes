const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);

router.get('/creditos', mainControllers.creditos)

module.exports = router;