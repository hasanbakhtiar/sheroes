

const preloader = document.querySelector(".preloader");
const main = document.querySelector('main');



setTimeout(() => {
    preloader.style.display = "none";
    main.style.display = "block";
}, 1000);



// setInterval(() => {
//     document.write('Hello');
    
// }, 5000);


// const text = document.querySelector('p');
// const stop = document.querySelector('button');


// const clockStart = setInterval(()=>{
//     text.innerHTML = new Date();
// },1000)

// stop.onclick = ()=>{
//     clearInterval(clockStart);
// }


// const text = document.querySelector('p');
// const stop = document.querySelector('button');


// const clockStart = setTimeout(()=>{
//     text.innerHTML = new Date();
// },1000)

// stop.onclick = ()=>{
//     clearTimeout(clockStart);
// }






