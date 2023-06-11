// Check the presence using closures.

function numberChecker(arr) {
 
    return function (number) {
        return arr.includes(number);  
    };
}

// Example usage;

const number = [1,2,3,4,5,6,9]
const checkNum  = numberChecker(number);

console.log(checkNum(3));

