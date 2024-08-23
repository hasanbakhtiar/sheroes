"use strict";



const user = {
    email:"admin@test.com",
    password:"admin123"
}



const form = document.querySelector("form");
const input = document.querySelectorAll('input');
const alertElem = document.querySelector('.alert');

const submitedForm = (e)=>{
    e.preventDefault();
    if (!input[0].value || !input[1].value) {
        alertElem.innerHTML = "Please, fill input.";
        alertElem.className = "alert alert-warning";
    }else{
        if (input[0].value === user.email && input[1].value === user.password) {
            alertElem.innerHTML = "Login is successfull";
        alertElem.className = "alert alert-success";
        }else{
            alertElem.innerHTML = "Email or password is wrong!";
            alertElem.className = "alert alert-danger";
        }
        
    }
    
    
    
}

form.onsubmit = submitedForm;




const eyeBtn  = document.querySelector('#eyeBtn');
eyeBtn.onclick = ()=>{
    if (input[1].type === 'password') {
        eyeBtn.innerHTML = "<i class='fa-solid fa-eye'></i>"
        input[1].type = 'text';
    }else{
        eyeBtn.innerHTML = "<i class='fa-solid fa-eye-slash'></i>"
        input[1].type = 'password';
        
    }
}




// const menuBtn = document.querySelector('#menuBtn');
// const menu = document.querySelector('menu');

// menuBtn.onclick = ()=>{
//     if (menuBtn.innerHTML === "Menu") {
//         menu.style.transform= "translateX(0)";
//         menuBtn.innerHTML = "X";
//     }else{
        
//         menu.style.transform= "translateX(500px)";
//         menuBtn.innerHTML = "Menu";
//     }
    
// }


// document.querySelector('h1').style.color = 'red'




// const btnForClick = document.querySelector(".btnForClick");
// // const hFour = document.querySelector('h4');
// const inputDfr = document.querySelector('.dfr');
// inputDfr.onkeydown = ()=>{
//     inputDfr.style.backgroundColor = "red";
//     inputDfr.style.color = "white";
//     inputDfr.style.transition = ".5s";
//     inputDfr.style.height = "100px";
    
// }
// inputDfr.onkeyup = ()=>{
//     inputDfr.style.backgroundColor = "white";
//     inputDfr.style.color = "black";
//     inputDfr.style.transition = ".5s";
//     inputDfr.style.height = "50px";
    
// }



// btnForClick.onmousedown =()=>{
//     hFour.innerHTML  = "Changed";
    
// }


// btnForClick.onmouseup =()=>{
//     hFour.innerHTML  = "Click me";
    
// }























// const langdata = {
//     en:{
//         header:{
//             top:{
//                 home:"Home",
//                 about:"about"
//             },
    
//         }
//     },
//     az:{
//         header:{
//             top:{
//                 home:"Ana Sehife",
//                 about:"Haqqinda"
//             },
    
//         }
//     }
// }



// const selectBtn = document.querySelector('select');

// selectBtn.onchange = ()=>{
//     if (selectBtn.value==="AZ") {
//         document.querySelector('h1').innerHTML = "Salam";
//     }else if(selectBtn.value === "EN"){
        
//         document.querySelector('h1').innerHTML = "Hello";
//     }else{
//         document.querySelector('h1').innerHTML = "Privet";

//     }
// }

