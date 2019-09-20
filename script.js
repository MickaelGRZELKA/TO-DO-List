'use strict'

const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
const li = document.createElement('li');


function inputlength(){
    return input.value.length;
}

function createListElement(){
    li.insertAdjacentElement(document.createTextNode(input.value));
    ul.insertAdjacentElement('li');
    input.value = "";
}

function addByClick(){
    if(input.length > 0){
        createListElement();
    }
}

function addByKeypress(){
    if(input.length > 0 && )
}