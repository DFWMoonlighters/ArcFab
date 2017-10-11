const serverSysSelectRoute = require('./features/systemSelection/serverSysSelectRoute.js');
const serverProDetailsRoute = require('./features/productDetails/serverProDetailsRoute.js');
const serverCartRoute = require('./features/cart/serverCartRoute.js');

module.exports = app => {
    serverSysSelectRoute(app)
    serverProDetailsRoute(app)
    serverCartRoute(app)
}
