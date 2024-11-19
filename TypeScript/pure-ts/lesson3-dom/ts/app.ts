// const h1= document.querySelector('h1') as HTMLHeadElement;  
// const h1= document.querySelector<HTMLHeadElement>('h1') ;  

// h1.innerHTML = "Miko";


interface userTypes {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


var ul= document.querySelector("ul") as HTMLUListElement;
var fetchData = (url:string)=>{
        fetch(url)
        .then(res=>res.json())
        .then((data:userTypes[])=>{
            let li:string="";
            data.map((item:userTypes,index:number)=>{
                li+=`<li>${item.title}</li>`
            })
            ul.innerHTML = li;
        })
}

fetchData('https://jsonplaceholder.typicode.com/todos');