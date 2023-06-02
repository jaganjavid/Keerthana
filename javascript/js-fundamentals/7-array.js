// Create a Array
// []

const numbers = [1, 35, 22, 36, 88, 9]; // ***
const numbers2 = new Array(45, 65,35);
const furits = ["Apple", "Banana", "Orange"];
const mixArray = [22, "Hello", true, undefined, null, [1,2,3], {a:1}];

let val;

// Get Array Length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a Single value
val = numbers[0];

// Insert into array
// val = numbers[2] = 100;

// Find the index os value
val = numbers.indexOf(36); // if array match is return the index number if not -1

// Mutating Array

// Add on the end
// numbers.push(1000);

// Add on to front
// numbers.unshift(2000);

// Take off from end
// numbers.pop();
// numbers.pop();

// Take off from front
// numbers.shift();
// numbers.shift();

// Splice 
//  To remove
// furits.splice(1,2);

// To add
// furits.splice(1,0,"Lemon");

// Reverse the array
numbers.reverse();

console.log(numbers);
