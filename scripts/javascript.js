//The code below is to make the form reset statement visible when the reset button is pressed.
function formReset() {
document.getElementById("messageReset").style.visibility = "visible";
}

//The code below is for the alert message to pop up once the form is submitted.
function formSubmit() {
alert("Thank you for submitting the form. We will be sure to check the feedback you give.");
}

//The code below is for the last modified element
document.getElementById("lastModified").innerHTML = document.lastModified;