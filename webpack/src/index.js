import _ from 'lodash';
// import './style.css';
// import Icon from './icon.jpg'
// import Data from './data.xml'

import printMe from './print'

function component () {
  var element = document.createElement('div')

  var btn = document.createElement('button')

  element.innerHTML = _.join(['hello', 'webpack'], ' ')

  btn.innerHTML = "Click me and check the console"
  btn.onclick = printMe
  element.appendChild(btn)

  /*
    // css
    element.classList.add('hello')

    // image
    var myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)
    // Data
    console.log(Data)
  */

  return element
}

document.body.appendChild(component())