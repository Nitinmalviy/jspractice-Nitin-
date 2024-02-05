// excecution context 
var a = 42;

function foo(num) {
  return num * num;
}

var b = foo(a);

console.log(b);