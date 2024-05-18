const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = {
  entry: resolve(__dirname, "../src/index.ts"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx",".html"],
    alias: {
        //在 webpack 中设置代码中 @ 符号表示 src 这一层目录
        '@': resolve(__dirname, 'src')
    }

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../src/index.html"),
    }),
  ],
};
