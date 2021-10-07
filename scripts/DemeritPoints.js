console.log('You made it to the Demerit points.js!');


let stop = false;


function main() {
  let limit, yourspeed;

  limit = Number(document.getElementById("textfield1").value);
  yourspeed = Number(document.getElementById("textfield2").value);

  document.getElementById("validityTest1").innerHTML = testNaN (limit);
  document.getElementById("validityTest2").innerHTML = testNaN (yourspeed);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Try Again!"
    } else {

      document.getElementById("answer").innerHTML = Solution (limit, yourspeed);

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

function Solution(limit, yourspeed) {
  var speed = (yourspeed - limit) / 5
  if (speed >= 12) {
    return speed + ": License suspended"
  } else if (speed >= 0) {
    return speed
  } else if (speed < 0) {
    return "Zero Points, Below Limit"
  }
}
