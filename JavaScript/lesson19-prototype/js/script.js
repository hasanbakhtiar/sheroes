function Info(title,price,color){
    this.ititle = title;

}

Info.prototype.year = 1990;

const MyInfo = new Info("BMW")
console.log(MyInfo.year);


