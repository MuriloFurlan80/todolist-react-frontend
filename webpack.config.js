const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main/startup/index.tsx",
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "auto",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/assets/img",
          outputPath: "/assets/img",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: "./public",
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: {
      index: "index.html",
    },
    port: 8080,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./template.html" }),
  ],
};
