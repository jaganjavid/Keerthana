// FUNCTION DECALARATIONS

// The function declaration (function statement)
// define a function with the specified parameter

// Two phases

// 1 - creataion 
// 2 - excutation


function greet(firstName = "John", lastName = "Doe"){ // parameters

    // FUNCTION BODY

    // if(typeof firstName === "undefined"){firstName = "John"}
    // if(typeof lastName === "undefined"){lastName = "Doe"}

    return `Hello ${firstName} ${lastName}`;
}

// console.log(greet("Jagan", "Javid")); // arguments
// console.log(greet()); // arguments

// Fucntion expression

// var add = function(x = 5){
//     console.log(x + 10);
// }

// add(15);


// AN IIFE (Imediately invoked function expression) in a javascript

// (function(){
//     console.log("IIFE RUNNING");
// })()

// (function(name){
//     console.log(name)
// })("Jagan");


const person = {
    firstName: "Jagan",
    lastName : "Javid",
    getFullName: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    } // methode
}

person.age = 27;

person.greet = function(){
    return "Vanakam";
}

console.log(person);

console.log(person.greet());

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName())

