function isPrime(n){
  var divisor = 2;

  while (n/2 > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else{
      divisor++;
      if(divisor % 2 == 0)
        divisor++;
    }
      
  }
  return true;
}

console.log(isPrime(16));

