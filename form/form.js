let userName = document.getElementById("username").value;
let email = document.getElementById("email").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let locat = document.getElementById("location").value;
let service = document.getElementById("service").value;
let mail =
  "Hello there" + userName +" you have succesfully booked a " + service +" session at "+ locat + "branch with us." +
  "The session will be on "+ date + "at" + time + ". Thank you for booking a session with us see you then.";

function sendMail(){
    alert(mail)
}