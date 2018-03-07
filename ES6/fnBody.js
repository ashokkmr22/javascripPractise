// Calling a function inside a body

var factorial = function f(n) {
  if (n <= 1) {
      return 1;
  }
  console.log(n);
  return n * f(n - 1);
}
// console.log(typeof f(2));
var r = factorial(4);
console.log(r);

// arguments.callee

var factorial = function (n) {
  if (n <= 1) {
      return 1;
  }
  return n * arguments.callee(n - 1);
}

var r = factorial(30);
console.log(r);