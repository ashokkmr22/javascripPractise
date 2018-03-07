//Using the let statement, you can create Block scoped local variables in JavaScript

//when we modify the value of variable x inside the if statement block, it modifies the value for all references of variable x in the function
function variableScope() {
  var x = 9;
  if (x > 5) {
      var x = 7;
      console.log("Value of x in if statement = " + x);
  }
  console.log("Value of x outside if statement = " + x);

}

//variableScope();


//Using let KeyWord
function variableScopeLet() {
  let x = 9;
  if (x > 5) {
      let x = 7;
      console.log("Value of x in if statement using let keyword = " + x);
  }
  console.log("Value of x outside if statement using let keyword= " + x);

}

variableScopeLet();

                  //Variable Hoisting with let
/* There is no variable hoisting for variables declared with let, which means variables declared with let do not move to the top of the execution context */



/* function letHoisting() {
      console.log(x);
      console.log(y);
      var x = "ashok";
      let y = "kumar";
  
  }
letHoisting(); */

        // Redeclaring Variables With let
/* You cannot redeclare a variable with let in the same function or block */

/* function letRedeclaring() {
  
  if(true){
      let x = "Ashok";
      let x = "test"; 
  }
  
}
letRedeclaring(); */


function temporalDead() {
  var x = 9;
  if (true) {
      //let x = x + 67;
      let x;
      x = x + 67;
      console.log(x);
  }

}
temporalDead();