//console.log("a");
setTimeout(function(){
  //console.log("b");
});
var c = ["c","d"];



for (var i=1;i<=50;i++){
  (function(i){
    setTimeout(function(){
      console.log(i);
    });
  })(i)
  
}


function makeFunc(num) {
  function displayName(num1) {
    console.log(num+num1,"jjjjjjjj");
  }
  return displayName;
}

var myFunc = makeFunc(2);
myFunc(3);