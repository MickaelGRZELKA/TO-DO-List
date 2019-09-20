
const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');
const li = document.createElement('li');


function inputlength(){
    return input.value.length();
}

function createListElement(){
    li.appendChild(li.textContent(input.value));
    ul.appendChild('li');
    input.value = "";
}

function addByClick(){
    if(input.length() > 0){
        createListElement();
    }
}

function addByKeypress(){
    if(input.length() > 0 && event.keycode === 13){
        createListElement();
    }
}

button.addEventListener('click', addByClick);
input.addEventListener('keypress', addByKeypress);