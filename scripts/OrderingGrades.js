console.log('You made it to the Ordering grades.js!');


let stop = false;

function javascript () {

}


function main() {
  let firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber;

  firstNumber = document.getElementById("textfield1").value;
  secondNumber = document.getElementById("textfield2").value;
  thirdNumber = document.getElementById("textfield3").value;
  fourthNumber = document.getElementById("textfield4").value;
  fifthNumber = document.getElementById("textfield5").value;


  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert (testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  document.getElementById("validityTest3").innerHTML = alert (testNaN (thirdNumber) );
  document.getElementById("validityTest3").innerHTML = testNaN (thirdNumber);
  document.getElementById("validityTest4").innerHTML = alert (testNaN (fourthNumber) );
  document.getElementById("validityTest4").innerHTML = testNaN (fourthNumber);
  document.getElementById("validityTest5").innerHTML = alert (testNaN (fifthNumber) );
  document.getElementById("validityTest5").innerHTML = testNaN (fifthNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);

    }
}
function firstPart (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) {
  var partOne = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;

}


function testNaN(number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "input validated"
  }
}

function Solution (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) {
  var partTwo = firstPart / 5;
  return partTwo

}
