var path = require("path");

var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/client/source/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: path.join(__dirname, "./client/source/app.js"),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline"
      }
    ]
  },
  output: {
    path: path.join(__dirname, "./client/build"),
    filename: "bundle.js"
  },
  plugins: [HTMLWebpackPluginConfig]
};
