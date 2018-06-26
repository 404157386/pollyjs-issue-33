const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const loadDevConfig = require("./webpack.dev.conf");
const mock = require("../mock");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost"
};

loadDevConfig.then(res => {
  const webpackConfig = res;
  WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
  const compiler = Webpack(webpackConfig);
  const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    inline: true,
    stats: {
      colors: true
    },
    before: function(app) {
      mock(app);
    }
  });
  const server = new WebpackDevServer(compiler, devServerOptions);

  server.listen(devServerOptions.port, devServerOptions.host, () => {});
});
