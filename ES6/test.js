function cons(){
  var fn = [];
  for(var i=0;i<10;i++){
    fn[i] = function(){return i};
  }
  return fn;
}
var test= cons();
console.log(test[5]());



var test = [1,23,12];
var test1 = [3,2];
test3 = test.concat(test1);
console.log(test3);

var temp = [];
if(temp){
  console.log("working");
}