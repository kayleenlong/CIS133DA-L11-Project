
/*
Author: Kayleen Long
Course: CIS133DA
Section: 27531
Lesson: 11
*/

// Display the date the document was last modified.
document.getElementById("lastModified").innerHTML = document.lastModified;

// Display an alert when the form is submitted.
function formSubmit() {
    alert("Your form has been submitted!");
}

// Display a message when the form is reset.
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}
