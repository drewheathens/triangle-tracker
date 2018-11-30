// var add = function(number1, number2, number3) {
//   return number1 + number2 + number3;
// };
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var number3 = parseInt(prompt("Enter the last number:"));
// var result = add(number1, number2, number3);
// alert(result);
//
//  if (number1===number2 && number2===number3) {console.log("equilateral!");
//
// } else if(number1===number2 || number2===number3) {console.log("isosceles!");
//
// } else if (number1+number2>=number3 || number2+number3<=number1) {console.log("FATAL ERROR! cannot be formed using those values.");
//
// }

function start(){
  var add = function(number1, number2, number3) {
 return number1 + number2 + number3;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var number3 = parseInt(prompt("Enter the last number:"));
var result = add(number1, number2, number3);
alert(result);

if (number1===number2 && number2===number3) alert("equilateral!")

else if(number1===number2 || number2===number3) alert("isosceles!");

else if (number1+number2>=number3 || number2+number3<=number1) alert("FATAL ERROR! cannot be formed using those values.");


}
