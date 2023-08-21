// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    open: true,
    port: "3000",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        use: "webp-loader",
        type: "asset",
      },
    ],
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@hocs": path.resolve(__dirname, "src/hocs"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@static": path.resolve(__dirname, "src/static"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [
      ".tsx",
      ".json",
      ".ts",
      ".js",
      ".hbs",
      ".d.ts",
      ".scss",
      ".html",
      ".svg",
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
