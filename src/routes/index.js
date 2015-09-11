var route = require('koa-route');
var homeRoutes = require('./homeRoutes');

class Routes {
  setupRoutes(app) {
    app.use(route.get('/', homeRoutes.home));

    return route;
  }
}

module.exports = Routes;
