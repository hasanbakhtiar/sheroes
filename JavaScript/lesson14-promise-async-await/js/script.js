

// const dataF = [
//     {
//         id:1,
//         title:"Table",
//         price:300
//     },{
//         id:2,
//         title:"chair",
//         price:30
//     },{
//         id:3,
//         title:"Pen",
//         price:1
//     }
// ]

// const dataC = JSON.stringify(dataF);
// const sendLData = ()=>{
//     localStorage.setItem('data',dataC);
// }
// sendLData()

// const dataInLocal = localStorage.getItem('data');
// document.querySelector('h1').innerHTML = JSON.parse(dataInLocal)[0].title;











// const fetchData = async()=>{
//     const comingData = await fetch("https://fakestoreapi.com/products")
//     const converData = await comingData.json();
//     console.log(converData);
// }

// fetchData()



















// const funcOne = ()=>{ return "3s"}
// const funcTwo = ()=>{ return "1s"}
// const funcThree = ()=>{ return "10s"}


// funcOne();
// funcTwo(); //4s
// funcThree();

// // async
// funcTwo(); //1s
// funcOne(); //3s
// funcThree(); //10s





// const fetchData = ()=>{
//     fetch('https://fakestoreapi.com/productsa')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// }
// fetchData()


// const fetchData =  new Promise((res,rej)=>{
//     const api = false;
//     if (api) {
//         res("success");
//     }else{
//         rej("error");
//     }

// });


// fetchData
// .then((res)=>console.log(res))
// .catch(err=>console.log(err))
