## 工作笔记

### axios

#### axios拦截器

> 分类

&emsp;请求拦截器、响应拦截器

``` javascript
// 请求
axios.interceptors.request.use(config => {
    // 在发起请求请做一些业务处理
    return config
  }, error => {
    // 对请求失败做处理
    return Promise.reject(error)
  })
// 响应
axios.interceptors.response.use(response => {
    // 对响应数据做处理
    return response
  }, error => {
    // 对响应错误做处理
    return Promise.reject(error)
  })
```

> 使用

&emsp;默认在 `main.js` 中进行配置

``` javascript
  axios.interceptors.request.use(config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  })
```

&emsp;在 `src` 文件夹内创建 `config` 文件夹，并在新建文件夹内创建 `index.js` 文件

``` javascript
// config/index.js
const env = process.env.NODE_ENV

const production = { // 生产地址
  commonPath: ''
}

const development = { // 开发地址
  commonPath: ''
}

const location = env === 'production' ? production : development
export default location
```

&emsp;在 `src` 文件夹内创建 `server` 文件夹，并在新建文件夹内创建 `index.js` `request.js` 两个文件

``` javascript
// sever/request.js
import axios from 'axios' // 引入axios
import conf from '../config/index' // 引入请求地址

const hostFilter = hostType => {
  switch (hostType) {
    case 'common':
      return conf.commonPath // 配置请求地址
  }
}

export default {
  post: (hostType, url, data, error, option) =>
    axios.post(hostFilter(hostType) + url, data, option) // 配置请求
      .then(response => {
        // console.log(response.data)
        return response.data
      })
      .catch(err => {
        error ? error(err) : console.log(err)
      }),
  url (hostType, path) { return hostFilter(hostType) + path }
}
```

``` javascript
// index.js
import http from './request' // 引入http

export const name = data => http.post('','', data)
//        调取接口名              请求地址 请求路径
```
