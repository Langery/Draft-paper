// curry
var add = (x) => {
  return (y) => {
    return x + y
  }  
}

var increment = add(1)
var addTen = add(10)

console.log(increment(2))
console.log(addTen(2))

// 面试题
var addNum = (x) => {
  var sum = x
  var tmp = (y) => {
    sum += y
    return tmp
  }
  tmp.toString = tmp.valueOf = () => {
    return sum
  }
  return tmp
}

console.log(addNum(2)(3)(4))