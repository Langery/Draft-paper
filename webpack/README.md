## webpack

> link: [webpack 中文文档](https://www.webpackjs.com/)

> unfinish

- [ ] 生产环境构建
- [ ] 创建library
- [ ] shimming

## Note

1. Error: CleanWebpackPlugin is not a constructor
``` javascript
  // 错误写法，但是官网是这么写的，但是报错！！！
  const CleanWebpackPlugin = require("clean-webpack-plugin")
  module.exports = {
    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
  }
  // 然后找到了这个
  const { CleanWebpackPlugin } = require("clean-webpack-plugin")
  module.exports = {
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
```
2. Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
```javascript
  // 官网写法
  const webpack = require('webpack')

  new webpack.optimize.CommonsChunkPlugin({
    name: 'common'
  }),
  // 查到的写法
  module.exports = {
    optimization: {
      splitChunks: {
        cacheGroups: {
          connons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          }
        }
      }
    }
  }
```
3. Cannot use [chunkhash] or [contenthash] for chunk in '[name].[chunkhash].js' 

&emsp;将plugins中的热替换插件注释掉
``` javascript
  module.exports = {
    plugins: [
      // new webpack.HotModuleReplacementPlugin()
    ]
  }
```