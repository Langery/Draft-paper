obj1={
  p:1,
  objSun:{
    p:1
  }
}

// obj2 = {...obj1}
obj2 = JSON.parse(JSON.stringify(obj1)) // 深拷贝


obj2.p = 2;
obj2.objSun.p = 2;

console.log(obj1);
console.log(obj2);
