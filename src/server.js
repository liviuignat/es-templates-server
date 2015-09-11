var path = require('path');
var koa = require('koa');
var bodyParser = require('koa-body-parser');
var methodOverride = require('koa-methodoverride');
var gzip = require('koa-gzip');
var route = require('koa-route');
var logger = require('./common/log');
var Routes = require('./routes');

class Server {
  constructor(options) {
    this.app = koa();
    this.rootFolder = path.join(options.dirname, 'src');
  }

  start() {
    this.setupRoutes();
    this.app.use(bodyParser());
    this.app.use(methodOverride());

    if (!this.isDev()) {
      this.app.use(gzip());
    }

    this.app.listen(this.getPort());

    logger.log(`Server started on port ${this.getPort()} on "${this.getEnvironment()}" environment`);

    return this;
  }

  setupRoutes() {
    var routes = new Routes();
    routes.setupRoutes(this.app);
    return this;
  }

  getEnvironment() {
    return process.env.NODE_ENV;
  }

  isDev() {
    return this.getEnvironment() === 'development';
  }

  getPort() {
    return process.env.PORT || 2000;
  }
}

module.exports = Server;
