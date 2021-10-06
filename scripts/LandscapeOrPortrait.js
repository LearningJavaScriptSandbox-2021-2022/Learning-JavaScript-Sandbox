console.log('You made it to the Landscape or portrait.js!');

let stop = false;

function main() {
  let firstNumber, secondNumber;
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;

  document.getElementById("validityTest1").innerHTML = (testNAN(firstNumber));
  document.getElementById("validityTest2").innerHTML = (testNAN(secondNumber));
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber, secondNumber);

  }
}

function Solution (firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "Portrait mode!"
  }else if (firstNumber < secondNumber) {
    return "Landscape Mode!"

  }else {
    return "Square Mode!"
  }
}

function testNAN (number) {
  if ( isNaN (number)) {
    stop = true;
    return "Type a Real Number!"
  } else {
    return "Input Validated"
  }
}
