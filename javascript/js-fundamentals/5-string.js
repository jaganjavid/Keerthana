const firstName = "Jagan";
const lastName = "Javid";
const age = 27;
const str = "Hello there my name is Jagan";
const tags = "Web dev, Web Design, coding, Programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + "Doe";
val += "Doe";

val = "Hello, My name is " + firstName + " and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change a case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index is Start from 0
val = firstName[0];
val = firstName[1];
val = firstName[5];

// CharAT()
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice()
const fruit  = "Apple";
val = fruit.slice(3, 5);

// Split()
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("Jagan", "Arun");

// Includes
val = str.includes("Jagan");

console.log(val);