const path = require('path');
const koa = require('koa');
const bodyParser = require('koa-body-parser');
const methodOverride = require('koa-methodoverride');
const gzip = require('koa-gzip');
const logger = require('./common/log');
const Routes = require('./routes');

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
    const routes = new Routes();
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
