//
function foo (a) {
  console.log(a);
}
foo(2);

// let
for (let i=0; i<10; i++) {
  console.log( i );
}
console.log( i ); // ReferenceError

var foo = true, baz = 10;
if (foo) {
  var bar = 3;
  if (baz > bar) {
    console.log( baz );
  }
  // ...
}

var foo = true, baz = 10;
if (foo) {
  let bar = 3;
  if (baz > bar) {
    console.log( baz );
  }
}

// cosnt
var foo = true;
if (foo) {
  var a = 2;
  const b = 3; // 包含在 if 中的块作用域常量
  a = 3; // 正常 !
  b = 4; // 错误 !
}
console.log( a ); // 3
console.log( b ); // ReferenceError!
