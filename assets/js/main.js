let form = document.querySelector("form")
let contactform = document.getElementById("contactform")
let contactform_2 = document.getElementById("contactform-2")
let messages = document.getElementById("messages")


function OpenForm() {
    contactform.classList.toggle("hidden");
}

function OpenForm2() {
    contactform_2.classList.toggle("hidden");
    document.location.assign("#top")
}

