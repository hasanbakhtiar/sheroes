// function info (a:number=5,b:number,c:string){
//         let d:number=  a+b;
//         return `${c} price:${d}$`;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(info(3,4,"Tomato"));
var Car = /** @class */ (function () {
    function Car(title, year, newCar) {
        this.infotitle = title;
        this.infoyear = year;
        this.infonewcar = newCar;
    }
    return Car;
}());
var myCar = new Car("BMW", 1990, false);
console.log(myCar);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(title, year, newCar) {
        return _super.call(this, title, year, newCar) || this;
    }
    Moto.prototype.showData = function () {
        return this.infonewcar;
    };
    return Moto;
}(Car));
var myMoto = new Moto("Yamaha", 3210, true);
console.log(myMoto.infonewcar);
