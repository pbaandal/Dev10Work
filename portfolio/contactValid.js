
function validate() {
  var name = document.getElementById("Name");
  var email = document.getElementById("Email");
  var phone = document.getElementById("phone");
  var inquiry = document.getElementById("inquiry");
  var info = document.getElementById("info");

  var message = "";
  if(!(name.value)){
    message = message + "Please enter in your name\n";
  }
  if(!(email.value)){
    message = message + "Please enter in your email\n";
  }
  if(!(phone.value)){
    message = message + "Please enter in your phone number\n";
  }
  if(inquiry.value == "other"){
    if(!info.value){
      message = message + "Please enter in your reason for contacting us\n"
    }
  }
  if(message.length != 0){
    alert(message);
    return false;
  }
  else{
    alert("Thank you for submitting your request! We will contact you as soon as possible");
  }
}
