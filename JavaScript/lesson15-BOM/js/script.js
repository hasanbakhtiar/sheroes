const ul = document.querySelector('ul');
const btnCon = document.querySelector('.btn-con');

const fetchData = (category)=>{
    fetch(!category?"https://fakestoreapi.com/products":`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(data=>{
        let li = "";
        data.map(item=>{
            li+=`<li>${item.title}</li>`
        })
        ul.innerHTML = li;
    })
} 

const crBtnWithData = ()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>{
        let btn = "";
        data.map(item=>{
            btn+=`<button onclick="fetchData('${item}')" class="${item}">${item}</button>`
        })
        btnCon.innerHTML = btn;
    })
}







fetchData();
crBtnWithData();







// const a = 15;

// a>5 ? console.log('hello'):console.log("Bye");

// condition ? true : false  









// const pathLen = window.location.pathname;
// console.log(window.location.search);

// console.log(pathLen.length);

// console.log(window.location.href.slice(0,pathLen.length));


















// console.log(window.innerHeight);
// const btn = document.querySelector('button');









// btn.onclick =()=>{
//     window.open('https://webluna.org',"","width=700, height=500")
// }



// console.log(window.navigator);


// if (window.navigator.language === "en-US") {
//     btn.innerHTML = "start"
// }else{
//     btn.innerHTML = "bashla"
// }


