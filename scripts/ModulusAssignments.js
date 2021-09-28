console.log('You made it to the Modulus assignments.js!');


let stop = false;

function javascript () {

}


function main () {
  let firstNumber;

  firstNumber = document.getElementById("textfield1").value;


  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber);

    }
}

function EvenOrOdd(firstNumber) {
  firstNumber % 2
}

function testNaN(number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "input validated"
  }
}

var result = EvenOrOdd();

function Solution (firstNumber) {
  if (result = 0) {
    return "Odd"
  }else {
    return "even"
  }
}
