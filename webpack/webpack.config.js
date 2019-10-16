const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
// const WorkboxPlugin = require('')
// const CopyWebpackPlugin = require('')

module.exports = env => {

  console.log('env: ', env)
  // console.log('NODE_ENV: ', env.NODE_ENV)
  // console.log('Production: ', env.production)

  return {
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
    watch: false,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 1000,
      ignored: /node_modules/
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
      // new WorkboxPlugin.GenerateSW({
      //   clientsClaim: true,
      //   skipWaiting: true
      // }),
      new webpack.BannerPlugin('Copyright © 2019'),
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
    resolve: {
      alias: {},
      mainFields: ['style', 'main'],
      extensions: ['js', 'vue'],
      modules: [path.resolve(__dirname, './src/'), 'node_modules'],
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
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
}