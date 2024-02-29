const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".svg"],
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
  plugins: [
    new Dotenv(), // for .env variables
    new HtmlWebpack({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },

      //rules for css files 
      {
        test: /.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      //rules for svg files
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },

      // Rule for PNG JPG JPEG files
      {
        test: /\.(png|jpg|jpeg|gif|mp3|svg)$/,
        use: ["url-loader"],
      },

    ],
  },
};
