// Implementing a person Class with Default Value

class Person {
    constructor(name = "Unkown",age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name},Age:${this.age}`

    }
}
// const person1 = new Person("Mithun", 20);
// console.log(person1.getDetails());

const person1 = new Person();
console.log(person1.getDetails());