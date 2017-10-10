const serverSysSelectRoute = require('./features/systemSelection/serverSysSelectRoute.js');
const serverProDetailsRoute = require('./features/productDetails/serverProDetailsRoute.js');


module.exports = app => {
    serverSysSelectRoute(app)
    serverProDetailsRoute(app)
}
