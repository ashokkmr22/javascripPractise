// Default Parameter using javascript


function defaultParams(name="Ashok") {
  console.log(name);
}

defaultParams();
defaultParams(undefined);
defaultParams("Kumar");


function defaultParamsReuse(num1 = 9, num2 = num1 + 8){
  console.log(num1,num2);
}
defaultParamsReuse(undefined,1);