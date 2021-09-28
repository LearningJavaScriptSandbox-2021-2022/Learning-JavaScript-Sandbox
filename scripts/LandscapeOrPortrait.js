console.log('You made it to the Landscape or portrait.js!');

let stop = false;

function javascript () {

}

function main() {
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
   //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;
  //validate by alert or html text in p tag
  document.getElementById("validityTest1").innerHTML = alert (testNAN(firstNumber));
  document.getElementById("validityTest1").innerHTML = (testNAN(firstNumber));
  document.getElementById("validityTest2").innerHTML = alert (testNAN(secondNumber));
  document.getElementById("validityTest2").innerHTML = (testNAN(secondNumber));
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber, secondNumber);

  }
}

function Solution (firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "You are in Portrait mode!"
  }else if (firstNumber < secondNumber) {
    return "You are in Landscape Mode!"

  }else {
    return "You are in Square Mode!"
  }
}

function testNAN (number) {
  if ( isNaN (number)) {//NaN are not values o REAL number system
    stop = true;
    return "Type a Real Number!"
  } else {
    return "Input Validated"
  }
}
