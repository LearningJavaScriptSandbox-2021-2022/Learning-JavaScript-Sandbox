console.log('You made it to the Max of two numbers.js!');


let stop = false;

function javascript () {

}


function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;


  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert (testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber, secondNumber);

    }
}

function testNaN(number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "input validated"
  }
}

function Solution (firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "The first number is larger"
  } else {
    return "The second number is larger"
  }
}
