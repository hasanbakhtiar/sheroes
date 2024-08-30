// const list = document.querySelector('ul');

// console.log(list.childNodes[1].firstChild.parentNode.parentNode.lastChild.firstChild.parentNode.parentElement.firstChild.nextSibling.firstChild.parentNode.parentNode.lastChild.previousSibling.firstChild.nodeValue);
// console.log(list.textContent);


// const inputData = document.querySelector('input');
// const btn = document.querySelector('button');


// btn.onclick = ()=>{
//     console.log(`Name:${inputData.value}`);
// }


// const newHeadline = document.createElement('h1');
// const newText = document.createTextNode("Hello");
// newHeadline.appendChild(newText);

// document.body.appendChild(newHeadline);


// const form  = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');



// form.onsubmit = (e)=>{
//     e.preventDefault();
//     if (!input.value) {
//         alert('please fill input')
//     }else{
//             const li = document.createElement('li');
//     li.innerHTML = input.value;
//     ul.appendChild(li);
//     input.value = "";
//     li.onclick = ()=>{
//         li.style.textDecoration = "line-through"
//     }
//     li.ondblclick = ()=>{
//         li.remove();
        
//     }

//     }

// }


// import {phones,h1} from './data.js';
import * as mydata  from './data.js';

console.log(mydata.phones);

mydata.h1.innerHTML = "Mello";


