var Server = require('./src/server');

var server = new Server({
  dirname: __dirname
}).start();
