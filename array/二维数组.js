var newObj = {
  0: [
    [
      'ok', '12'
    ],
    [
      'find', '13'
    ],
    [
      'bad', '20'
    ]
  ],
  1: [
    [
      'mmybe', '21'
    ],
    [
      'or', '23'
    ],
    [
      'and', '25'
    ]
  ]
}
// console.log(newObj)
// console.log(typeof newObj)
var newArr = []
for (var i in newObj) {
  newArr.push(newObj[i])
}
console.log(newArr)
console.log(newArr[0][1])
