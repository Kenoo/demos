const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const mode = process.env.NODE_ENV || "development"
module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "../src/index.js"),
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html', 
    }),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
  ],
  output: {
    path:path.resolve(__dirname,'../dist'),
    filename: '[name].bundle.js',
    clean:true //每次构建清除dist包
  },
}