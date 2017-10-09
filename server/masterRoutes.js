const serverSysSelectRoute = require('./features/systemSelection/serverSysSelectRoute.js')

module.exports = app => {
    serverSysSelectRoute(app)
}