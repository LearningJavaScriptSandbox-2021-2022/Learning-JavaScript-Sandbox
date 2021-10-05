console.log('You made it to the FizzBuzz.js!');


let stop = false;

function javascript () {

}


function main() {
  let firstNumber;

  firstNumber = Number(document.getElementById("textfield1").value);

  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (firstNumber);

    }
}

function testNaN(number) {
  if (isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "input validated"
  }
function Solution(firstNumber){
  if (firstNumber/3)
}
