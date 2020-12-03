const express = require('express');
const router = express.Router();
const heroesControllers = require('../controllers/heroesControllers');

router.get('/heroes', heroesControllers.getAll);

router.get('/heroes/detalle/:id', heroesControllers.getDetallesId);

router.get('/heroes/detalle/:id/:ok?', heroesControllers.getBioId);

module.exports = router;