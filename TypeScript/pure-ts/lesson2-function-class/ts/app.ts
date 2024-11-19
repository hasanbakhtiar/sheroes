// function info (a:number=5,b:number,c:string){
//         let d:number=  a+b;
//         return `${c} price:${d}$`;
// }

// console.log(info(3,4,"Tomato"));




interface CarType{
    title:string;
    year:number;
    newCar:boolean;
}

class Car{
    protected infotitle:string;
    private infoyear:number;
    public infonewcar:boolean;
    
    constructor(title:string,year:number,newCar:boolean){
        this.infotitle=title;   
        this.infoyear=year;   
        this.infonewcar=newCar;   
    }
}


var myCar:CarType = new Car("BMW",1990,false);
console.log(myCar);




class Moto extends Car{
    constructor(title:string,year:number,newCar:boolean){
        super(title,year,newCar);
    }

    showData(){
        return this.infonewcar;
    }
}

var myMoto = new Moto("Yamaha",3210,true);
console.log(myMoto.infonewcar);




