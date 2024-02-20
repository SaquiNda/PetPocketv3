const Solicitudes ={}
Solicitudes.showSolicitudes_1 = (req, res) => {
    res.render('Solicitudes/Solicitudes_1')

}
Solicitudes.showSolicitud_1 = (req, res) => {
    res.render('Solicitudes/Solicitud_1')
}
Solicitudes.showSeguir_1 = (req, res) => {
    res.render('Solicitudes/Seguir_1')
}
Solicitudes.showNotificaciones_1 = (req, res) => {
    res.render('Solicitudes/Notificacion_1')
}
module.exports = Solicitudes