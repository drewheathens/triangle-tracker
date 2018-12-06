
function start() {

  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var number3 = parseInt(prompt("Enter the last number:"));


  if (number1 + number2 <= number3 || number1 + number3 <= number2 || number2 + number3 <= number1) {
    alert("Not a Triangle!");
  } else if (number1 === number2 && number2 === number3) {
    alert("equilateral!")
  } else if (number1 === number2 || number2 === number3) {
    alert("isosceles!");
  } else if (number1 + number2 >= number3 || number1 + number3 >= number2 || number2 + number3 >= number1) {
    alert("scalene!");
  } else {
    alert("You must enter number value");
  }
}
