## webpack

> link: [webpack 中文文档](https://www.webpackjs.com/)

## Note

1. Error:CleanWebpackPlugin is not a constructor
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