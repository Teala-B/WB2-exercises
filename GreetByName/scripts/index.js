"use strict"

window.onload = init;

function init() {

    let greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked
}

function onGreetUserBtnClicked() {
    alert("Hello username here")
    
}