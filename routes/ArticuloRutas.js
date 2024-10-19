const express = require('express');
const router = express.Router();

const  ArticuloControlador = require('../controllers/ArticuloControlador')


//Rutas 
router.get ("/prueba", ArticuloControlador.prueba);
router.get ("/guardar", ArticuloControlador.gardar);

module.exports = router;

