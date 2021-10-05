console.log('You made it to the Demerit points.js!');


let stop = false;

function javascript () {

}


function main() {
  let firstNumber, secondNumber;

  firstNumber = Number(document.getElementById("textfield1").value);
  secondNumber = Number(document.getElementById("textfield2").value);

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

function Solution(firstNumber, secondNumber) {
  var speed = secondNumber - firstNumber
  if (speed >= 60) {
    return "bad"
  }else if (speed < 0){
    return "no"
  } else {
    var speedTwo = Math.floor(speed/5)
    return speedTwo
  }
}
