const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // entry: './src/index.js',
  entry: {
    // app: './src/index.js',
    // print: './src/print.js'
    // index: './src/index.js',
    // index: './src/getindex.js',
    // index: './src/lazyindex.js',
    // another: './src/another-module.js'
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        connons: {
          // name: 'commons',
          name: 'manifest',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: 'Output Message'
      title: 'Code Message'
    }),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    }),
    new webpack.NamedModulesPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // filename: 'bundle.js',
    // filename: '[name].bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}