const supertest = require('co-supertest');
const Server = require('./../../src/server');

class TestHelper {
  constructor() {
  }

  * getRequest() {
    if (!this.app) {
      const server = new Server({
        dirname: './'
      }).start();
      this.app = supertest.agent(server.app.listen());

    }
    return this.app;
  }
}

module.exports = new TestHelper();
