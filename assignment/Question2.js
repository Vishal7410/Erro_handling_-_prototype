/*
function getPerson(person){
    try{
        const {name,age} = person;

        return `Name:${name},Age:${age}`;

    } catch(error) {
        return 'Invalid parameter type';

    }
}
console.log(getPerson({name:"Mithun"}));


*/

function getPerson(person){
    try{ 
        if (typeof person !== 'object'|| !person.hasOwnProperty('name') || !person.hasOwnProperty('age')){
            throw new Error ('Invalid paramerter type')
        }

        const name = person.name;
        const age = person.age;

        return `Name: ${name}, Age: ${age}`;

    }
    catch(error){
        return error.message;

    }
}

console.log(getPerson({name: "Mithun", age: 18}));
console.log(getPerson({name: "Mithun"}));
console.log(getPerson(["name", "Mithun"]));