class HomeRoutes {
  * home() {
    const welcomeMessage = `Welcome to Node v4`;
    this.body = welcomeMessage;
  }
}

module.exports = new HomeRoutes();
