const routers = require('express').Router();

const Imagen = require('./routers/r_imagen');

routers.use('/', Imagen);

module.exports = routers;