class Car{
    constructor(title,price,color,newCar){
            this.iTitle = title;
            this.iPrice = price;
            this.iColor = color;
            this.iNewCar = newCar;
    }

    calculateSpeed(km,hour){
            return `${this.iTitle} speed's ${(km/hour).toFixed()} k/h`
    }
    
}


const myCar = new Car("BMW",30000,"white",true);
const yourCar = new Car("Mercedes",5000,'black',false);
console.log(myCar.calculateSpeed(100,3));
console.log(yourCar.calculateSpeed(200,7));

class Moto extends Car{
    constructor(title,price,color,newCar){
            super(title,price,color,newCar);
    }


    
}

const myMoto = new Moto("Yamaha",2000,"red",false);
console.log(myMoto.calculateSpeed(300,4));

