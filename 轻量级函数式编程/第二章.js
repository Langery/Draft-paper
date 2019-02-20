// arguments 实参  输入值
// parameters 形参  函数中的命名变量
// Arity 一个函数声明的形参数量
// variadic 带有可变数量参数的函数

function foo(x = 3) {
	console.log( x );
}
foo();				    	// 3
foo( undefined );		// 3
foo( null );			  // null
foo( 0 );				    // 0

// 只传入前两个值
function arr ([x, y, ...args] = []) {
  //
  console.log(x,y) // 1 2
}
arr( [ 1, 2, 3 ] )

// 声明性代码通常比命令式代码更干净

function foo( {x,y} = {} ) {
	console.log( x, y );  // undefined 3
}

foo( {
	y: 3
} );
