import _ from 'lodash';
import './style.css';
// import Icon from './icon.jpg'
// import Data from './data.xml'
import printMe from './print'
import { cube } from './math'

function component () {
  // var element = document.createElement('div')
  var element = document.createElement('pre')

  // var btn = document.createElement('button')

  // element.innerHTML = _.join(['hello', 'webpack'], ' ')

  // btn.innerHTML = "Click me and check the console"
  // btn.onclick = printMe
  // element.appendChild(btn)

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n')

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

// document.body.appendChild(component())
let element = component()
document.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!')
    // printMe()
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
