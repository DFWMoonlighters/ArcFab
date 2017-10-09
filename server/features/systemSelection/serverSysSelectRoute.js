const serverSysSelectCtrl = require('./serverSysSelectCtrl.js')


module.exports = app => {
    
    app.get('/api/systems', serverSysSelectCtrl.getSystems )

}