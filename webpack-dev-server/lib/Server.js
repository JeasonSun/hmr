const express = require("express");
const http = require("http");

class Server {
  constructor(compiler, devServerConfig) {
    this.compiler = compiler;
    this.devServerConfig = devServerConfig;
    this.setupApp();
    this.routes();
    this.createServer();
  }

  setupApp() {
    this.app = express();
  }

  routes() {
    if (this.devServerConfig.static) {
      this.app.use(express.static(this.devServerConfig.static));
    }
  }

  createServer() {
    this.server = http.createServer(this.app);
  }

  listen(port, host, callback) {
    this.server.listen(port, host, callback);
  }
}

module.exports = Server;
