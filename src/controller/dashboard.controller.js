const dashboard = {}

dashboard.showDashboard = (req, res) => {
    res.render('dashboard/dashboard')
}

dashboard.showForm = (req, res) => {
    res.render('dashboard/Solicitud')
}
dashboard.showseguir = (req, res) => {
    res.render('dashboard/Seguir')
}
dashboard.showNotificacion = (req, res) => {
    res.render('dashboard/Notificacion')
}
dashboard.showsolicitud=(req, res) => {
    res.render('dashboard/Solicitud')
}
dashboard.showNotificacion_Eliminar = (req, res) => {
    res.render('dashboard/Notificacion_Eliminar')
}
module.exports = dashboard