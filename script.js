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