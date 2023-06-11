// Using Static Method to Add Number with Calculator Class

class Calculator{
   constructor(num1,num2){
     this.num1 = num1;
    this.num2 = num2;
}
        static add(num1,num2){
            return num1+num2;
           
    }
    }
const result = Calculator.add(2,6);
console.log(result);
   