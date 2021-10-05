console.log('You made it to the Greeting someone.js!');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById("whattime").innerHTML = time;
document.getElementById('greeting').innerHTML = whatgreeting(time);


function whatgreeting (time){
  if (time = 0) {
    return "Wakey Wakey"
  }else if (time = 7) {
    return "Good morning"
  }else if (time = 12) {
    return "good afternoon"
  }else if (time = 19) {
    return "good evening"
  }else if (time = 22) {
    return "good night"
  }else if (time = 24) {
    return "go to bed"
  }
}
