`use strict`;

const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let li;

styl();

function styl(){
document.body.style.fontFamily = "Indie Flower";
}

function inputValueLength() {
    return input.value.length;
}

function restartInput() {
    input.value = "";
}

function textToLi() {
    li.append(document.createTextNode(CapitalizeText()));
}

function listToUl() {
    ul.insertAdjacentElement("beforeend", li);
}

function createLi() {
    li = document.createElement("li");
}
function addSymbolSupp() {
    let buttonSupp = document.createElement("button");
    let supp = document.createTextNode("-");
    buttonSupp.className = "supp";
    buttonSupp.append(supp);
    li.append(buttonSupp);
}

function deleteLi() {
    let del = document.getElementsByClassName("supp");
let li;
for ( let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        li = this.parentElement;
        li.remove();
    }
}
}

function CapitalizeText() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputValueLength()).toLowerCase();
}
function listInUl() {
    createLi();
    textToLi();
    listToUl();
    restartInput();
    addSymbolSupp();
    deleteLi();
}
function addAfterClick() {
    if (inputValueLength() > 0) {
        listInUl();
    }
}

function addAfterKeypress(key) {
    let code = key.charCode;
    if(code === 13 ) { 
        listInUl();
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeypress);