var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 9090
  },
  output: {
    // publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jpeg$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240,  //图片大小限制，若大于该值，则打包搭配dist/static/images下，若小于该值，打包到js文件
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        // exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        }, 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2|otf)/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'plugin study',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}