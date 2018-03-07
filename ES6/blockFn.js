//Block Scoped Fn

{
  console.log("Blockfn called");
}




{
  var test=1;
  function BlockScopeFn () { return 1 }
  console.log("Using Block Scope :"+ BlockScopeFn());
  {
     var test=2;
      function BlockScopeFn () { return 2 }
      BlockScopeFn() === 2
      console.log("Using Block Scope :"+ BlockScopeFn());
  }
  //BlockScopeFn() === 1
  console.log("Using Block Scope :"+BlockScopeFn());
}


//Before

(function (){
  var nonBlockScopeFn = function () { return 1; }
  console.log("Without Using Block Scope :"+nonBlockScopeFn());
  (function () {
      var nonBlockScopeFn = function () { return 2; }
      console.log("Without Using Block Scope :"+nonBlockScopeFn());
  })();
  console.log("Without Using Block Scope :"+nonBlockScopeFn());
})()