const express = require('express');
const rutas = express.Router()

const {showDashboard, showForm, showseguir, showNotificacion, showsolicitud, showNotificacion_Eliminar} = require('../controller/dashboard.controller')

rutas.get('/dashboard', showDashboard)
rutas.get('/Solicitud', showForm)
rutas.get('/Seguir', showseguir)
rutas.get('/dashboard/Notificacion',showNotificacion)
rutas.get('/dashboard/Solicitud',showsolicitud)
rutas.get('/dashboard/showNotificacion_Eliminar',showNotificacion_Eliminar)
module.exports = rutas