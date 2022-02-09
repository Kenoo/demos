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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //从右向左解析
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/, //加载图片资源
        type: "asset",
        generator: {
          filename: "static/img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,//加载视频资源
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, //加载字体资源
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/fonts/[name].[hash:7].[ext]",
        },
      },
      {
        test: /(\.jsx|\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path:path.resolve(__dirname,'../dist'),
    filename: '[name].bundle.js',
    clean:true //每次构建清除dist包
  },
}