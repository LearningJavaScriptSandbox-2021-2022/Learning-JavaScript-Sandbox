console.log('You made it to the Modulus assignments.js!');


let stop = false;


function main () {
  let firstNumber, result

  firstNumber = Number(document.getElementById("textfield1").value);

  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber);

    }


    function EvenOrOdd(firstNumber) {
      var result = (firstNumber % 2);
      return result
    }
}


function testNaN(number) {
  if (isNaN (number) ) {
    stop = true;
    return "Please Input a Number"
  } else {
    return ":)"
  }
}


function Solution (firstNumber, result) {
  if (firstNumber % 2 == 0) {
    return "Even"
  }else {
    return "Odd"
  }
}
