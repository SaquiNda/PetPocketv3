const express = require('express');
const rutas = express.Router()

const {showSolicitudes_1, showSolicitud_1, showSeguir_1, showNotificaciones_1 } = require('../controller/Solicitudes_1.controller')

rutas.get('/Solicitudes_1', showSolicitudes_1)
rutas.get('/Solicitud_1', showSolicitud_1)
rutas.get('/Seguir_1', showSeguir_1)
rutas.get('/Notificacion_1', showNotificaciones_1)
module.exports = rutas