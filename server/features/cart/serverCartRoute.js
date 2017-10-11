const serverCartCtrl = require('./serverCartCtrl.js')


module.exports = app => {

    app.get('/api/cart', serverCartCtrl.getCart )

}
