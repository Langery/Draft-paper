// 声明
// 赋值
// 先声明后赋值

for (let i = 1; i <= 5; i++) {
  setTimeout( function timer () {
    console.log(i)
  }, i * 1000 )
}

// 模快
// function CoolModule(){
//   var something = 'cool'
//   var another = [1, 2, 3]
//   function doSomething(){
//     console.log(something)
//   }
//   function doAnother(){
//     console.log(another.join(' ! '))
//   }
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   }
// }
// var foo = CoolModule()
var foo = (function CoolModule(){
  var something = 'cool'
  var another = [1, 2, 3]
  function doSomething(){
    console.log(something)
  }
  function doAnother(){
    console.log(another.join(' ! '))
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
})()
foo.doSomething() // cool
foo.doAnother() // 1 ! 2 ! 3
