"use strict"

window.onload = init;

function init() {

    let greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked  
}

function onGreetUserBtnClicked() {
    let nameField = document.getElementById("nameField")
    alert("Hello " + nameField.value)
}