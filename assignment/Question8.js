// Adding a Method to a Prototype.

/*
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
name "Mithun" and call the printDetails method.
*/
 
function Student(name) {
    this.name = name;
    
}

// Adding the printDetails method to the prototype
Student.prototype.printDetails = function(){
    console.log("Hello, my name is " + this.name);
};

// Instantiating a Student object with the name "mithun"
const student = new Student("mithun");

// Calling the printDetails mehtod

student.printDetails();
