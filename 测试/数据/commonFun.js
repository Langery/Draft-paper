// Common function
var inPage = (sendData) => {
  window.onload = () => {
    sendData()
  }
}

var returnName = (name) => {
  return document.getElementById(name)
}

// 双向数据绑定
