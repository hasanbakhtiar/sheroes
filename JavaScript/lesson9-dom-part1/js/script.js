"use strict";

// DOM = Document Object Model 


// document.getElementsByTagName('h1')[0].innerHTML = "New Value";
// document.getElementById('test').innerHTML = "new id value";
// document.getElementsByClassName("myColor")[0].innerHTML = "new class value";

// document.getElementsByClassName("myColor")[0].innerHTML = "<i>new class value</i>";
// document.getElementsByClassName("myColor")[0].innerText = "<i>new class value</i>";

// document.getElementsByTagName('h1')[0].className = "newColor";
// document.getElementsByTagName('h1')[0].attributes[0].value = "newColor";





// const headLine = document.querySelector('#test');
// headLine.innerHTML = "Bye"


// for (let i = 0; i < headLine.length; i++) {
//     headLine[i].innerHTML = "Bye"
// }

// const h1 = document.querySelector('h1');
// const btn = document.querySelector('.clickBtn');


// const changeData = () =>{
//     h1.innerHTML = "Bye";
// }


// btn.addEventListener('click',changeData);





const lang = {
    az: ["Ana Sehife", "Haqqimizda", "Xidmetlerimiz", "Meqale", "Elaqe"],
    en: ["Home", "About us", "Our services", "Blog", "Contact"],
}

const langBtn = document.querySelector('#langBtn');
const navLink = document.querySelectorAll('.nav-link');

const multiLang = () => {
    if (langBtn.innerHTML === 'AZ') {
        lang.az.map((i, c) => {
            navLink[c].innerHTML = i;

        })
        langBtn.innerHTML = "EN";
    } else {
        lang.en.map((i, c) => {
            navLink[c].innerHTML = i;

        })
        langBtn.innerHTML = "AZ";
    }

}

langBtn.onclick = multiLang;


// ========================================================================================


const nav = document.querySelector('nav');
const modeBtn = document.querySelector('#modeBtn');
let modeLight = false;

const changeMode = () => {
    if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
        modeLight = true;
        modeBtn.innerHTML = "🌞"
        
    } else {
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
        modeLight = false;
        modeBtn.innerHTML = "🌜"
    }

}

modeBtn.onclick = changeMode;