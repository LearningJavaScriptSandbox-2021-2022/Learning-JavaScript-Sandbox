console.log('You made it to the Ordering grades.js!');


let stop = false;


function main() {
  let firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, divide;

  firstNumber = Number(document.getElementById("textfield1").value);
  secondNumber = Number(document.getElementById("textfield2").value);
  thirdNumber = Number(document.getElementById("textfield3").value);
  fourthNumber = Number(document.getElementById("textfield4").value);
  fifthNumber = Number(document.getElementById("textfield5").value);
  divide = Checkboxes(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber)


  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  document.getElementById("validityTest3").innerHTML = testNaN (thirdNumber);
  document.getElementById("validityTest4").innerHTML = testNaN (fourthNumber);
  document.getElementById("validityTest5").innerHTML = testNaN (fifthNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, divide);

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
//Checks whats in boxes and makes sure they are defined
function Checkboxes(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber){
  let divide = 0

  if (firstNumber > 0) {
    divide += 1
  }
  if (secondNumber > 0) {
    divide += 1
  }
  if (thirdNumber > 0) {
    divide += 1
  }
  if (fourthNumber > 0) {
    divide += 1
  }
  if (fifthNumber > 0) {
    divide += 1
  }
  return divide
}
//tallys up the grades
function Solution (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, divide) {

   var math = (firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber) / divide
   if (math >= 90) {
     return math + " A"
   } else if (math >= 80) {
     return math + " B"
   } else if (math >= 70) {
     return math + " C"
   } else if (math >= 60) {
     return math + " D"
   } else {
     return math + " F"
   }


}
