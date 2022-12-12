const webpack = require("webpack");
const config = require("./webpack.config.js");
const Server = require("./webpack-dev-server/lib/server");

const compiler = webpack(config);

startDevServer(compiler, config);

function startDevServer(compiler, config) {
  const devServerConfig = config.devServer || {};
  const { port = 8080, host = "localhost" } = devServerConfig;
  const server = new Server(compiler, devServerConfig);
  server.listen(port, host, () => {
    console.log(`server is running at http://${host}:${port}/`);
  });
}

module.exports = startDevServer;
