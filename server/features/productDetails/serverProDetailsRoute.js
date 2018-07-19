const serverProDetailsCtrl = require('./serverProDetailsCtrl.js')


module.exports = app => {

    app.get('/api/product/:id', serverProDetailsCtrl.getProductInfo )
    app.post('/api/order', serverProDetailsCtrl.postOrder )

}
