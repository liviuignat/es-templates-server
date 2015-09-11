const route = require('koa-route');
const homeRoutes = require('./homeRoutes');

class Routes {
  setupRoutes(app) {
    app.use(route.get('/', homeRoutes.home));

    return route;
  }
}

module.exports = Routes;
