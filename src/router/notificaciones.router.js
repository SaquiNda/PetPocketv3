const express = require('express');
const { show } = require('../controller/notificaciones.controller');
const router = express.Router();

router.get('/notificaciones',show)


module.exports = router;