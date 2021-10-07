console.log('You made it to the Greeting someone.js!');

var today = new Date();
var time = today.getHours();
document.getElementById("whattime").innerHTML = time + " O'Clock";
document.getElementById('greeting').innerHTML = whatgreeting(time);


function whatgreeting (time){
  if (time >= 24) {
    return "you should go to bed!"
  }else if (time >= 22) {
    return "Good night!"
  }else if (time >= 19) {
    return "good good evening!"
  }else if (time >= 12) {
    return "good afternoon!"
  }else if (time >= 7) {
    return "good morning!"
  }else if (time >= 0) {
    return "This is very early!"
  }
}
