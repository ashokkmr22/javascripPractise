var person = 'Mike';
var age = 28;

var s = ( a =1 ,b = a+1) => {
  console.log(arguments); 
}
s();
console.log(`suriya agee is ${age}, susd ${person} sdf`)
// function myTag(strings, perso, ageExp) {
// console.log(strings)
//   var str0 = strings[0]; // "that "
//   var str1 = strings[1]; // " is a "

//   // There is technically a string after
//   // the final expression (in our example),
//   // but it is empty (""), so disregard.
//   // var str2 = strings[2];

//   var ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   return str0 + perso + str1 + ageStr;

// }

// var output = myTag`${ person } is a ${ age } that`;

// console.log(output);