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

