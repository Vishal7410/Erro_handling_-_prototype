// Car Description Class/;


class Car  {

constructor(year,company,model){
    this.year = year;
    this.company= company
    this.model = model
  
}
getDescription(){
    
    return `This is a ${this.year} ${this.company} ${this.model}`

}
}

const myCar = new Car(2022,"skoda","Rapid")

console.log(myCar.getDescription());







// console.log(Car.getDescription({ year: 2022, company: "Skoda", model: "Rapid"}));
