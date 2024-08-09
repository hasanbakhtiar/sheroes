
// let count = 0;

// while (count<10) {//condition
//     count++;//action
//     console.log(count);//result
// }

// do{
//     count++;//action
//     console.log(count);//result
// }while(count>10)//condition



// for(let count=0;count<10;count++){
//             console.log("Hello"+count);
            
// }












// const infoData = ['Table','Chair',"Book","Notebook","Pen","Pencil"];
const infoData = [
    {
        title:"BMW X5",
        price:30000,
        category:"Sport"
    },
    {
        title:"Audi Q7",
        price:50000,
        category:"Sport"
    },
    {
        title:"Lada 2106",
        price:1400,
        category:"Retro"
    }
];


// for(let i in infoData){
//         if (infoData[i].category==="Retro") {
//         console.log(infoData[i].title);
//     console.log("Price: "+infoData[i].price+"AZN");
//     }
    
// }



// for(let i of infoData){
//     if (i.category === "Retro") {
//             console.log(i.title);
//             console.log(i.price);
            
//     }
// }




// for(let count = 0;count<infoData.length;count++){
//     if (infoData[count].category==="Retro") {
//         console.log(infoData[count].title);
//     console.log("Price: "+infoData[count].price+"AZN");
//     }
    
// }



// const info = prompt();
// console.log(info);


// alert("Hello World");
const info = confirm("Shertleri qebul edirsiz?");


if (info) {
    console.log('Success');
    
}else{
    console.log('Reject');
    
}

