console.log('You made it to the Max of two numbers.js!');


let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes

}
//Main Function, necessary lines of code
function main() {
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;
  //Validate by alert or HTML Text in p-tag

  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert (testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Restart because I said so." //Change to more appropriate message
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      document.getElementById("anwser").innerHTML = ("What did you say?" + Solution (firstNumber, secondNumber)); // Change to more appropriate message

    }
} //End main()
//
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are not values o REAL Number System
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}//End testNaN()

function Solution(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "The first number is bigger"
  } else if (secondNumber > firstNumber) {
    return "The second number is bigger"
  }else {
    return "The numbers are equal"
  }
}
