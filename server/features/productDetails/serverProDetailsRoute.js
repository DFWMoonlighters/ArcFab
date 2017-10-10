const serverProDetailsCtrl = require('./serverProDetailsCtrl.js')


module.exports = app => {

    app.post('/api/order', serverProDetailsCtrl.postOrder )

}
