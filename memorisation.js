/* function test(arg){
  arg.prop1 = "test";
  arg.prop2 = "aaaa";
}
var c = {};
c.prop12 = "";
test(c);
console.log(c);
function test(arg){
  b=arg;
}
var c = 1;
test(2);
console.log(b);
   */

var fibonacci = function() {
  var memo = {};

  function f(n) {
    //console.log(n);
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);
        //console.log(value);

      memo[n] = value;
      //console.log(memo);
    }

    return value;
  }
  //console.log(memo);
  return f;
};
var fibo = fibonacci();
console.log(fibo(6));
// console.log(fibo(3));

