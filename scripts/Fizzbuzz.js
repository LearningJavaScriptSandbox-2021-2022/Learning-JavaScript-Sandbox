console.log('You made it to the FizzBuzz.js!');

function main() {
  let number;

   number = Number(document.getElementById("textfield1").value);
   document.getElementById("answer").innerHTML = fizzorbuzz (number);
}

function fizzorbuzz (number) {
  if (number % 3 == 0) {
    if (number % 5 == 0) {
      return "fizzbuzz"
    }else {
      return "fizz"
    }
  }else if (number % 5 == 0) {
    return "buzz"
  }else {
    return number
  }
}
