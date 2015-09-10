class Logger {
  log() {
    console.log.apply(this, arguments);
    return Promise.resolve();
  }
}

module.exports = new Logger();
