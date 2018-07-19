const serverSysProdCtrl = require('./serverSysProdCtrl.js')

module.exports = app => {

    app.get('/api/products/:system', serverSysProdCtrl.getProducts )

}