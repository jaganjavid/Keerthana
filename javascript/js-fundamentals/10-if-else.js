// if(something){
//     do something
// }else{
//     console.log(do something else)
// }


const id = 100; // number

// Equal to value

if(id == "100"){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}


// Not Equal to

if(id != "100"){
    console.log("CORRECT")
}else{
    console.log("INCORRECT");
}

// EQUAL TO VALUE AND DATA TYPE

if(id === 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// Not equal to value and type
if(100 !== "101"){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}


// Test if undefined

let greet = "Hello";

if(typeof greet === "undefined"){
    console.log(`im undefined`);
} else {
    console.log(`i have hello a value`);
}


// Greater than and less than

if(100 >= 99){
    console.log("CORRECT")
}else {
    console.log("INCORRECT")
}

if(99 <= 100){
    console.log("CORRECT")
}else {
    console.log("INCORRECT")
}


// if else 

const color = "violet";

if(color === "red"){
    console.log("Color is red")
} else if (color === "blue"){
    console.log("Color is blue")
} else if (color === "violet"){
    console.log("Color is violet")
}
else{
    console.log("Color is not matching")
}

// LOgical OPerator

const name = "Javid";
const age = 17;


// AND - && check both value true

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if (age >=13 && age <= 19){
    console.log(`${name} is a teenager`)
} else{
    console.log(`${name} is a adult`);
}


// OR - || CHECK only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else{
    console.log(`${name} can register for the race`);
}



// Ternary operator

console.log(100 === 101 ? "CORRECT" : "INCORRECT");