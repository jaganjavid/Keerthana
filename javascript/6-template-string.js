const name = "Javid";
const age = 27;
const job = "Web Developer";
const city = "Chennai";
let val;


// Without template strings
// val = "My name is " + name + " " + "I'm" + " " + age + " " + "My job is " + job + " " + "in" + " " + city;

// With Template Strings (es6)
val = `My name "is" 
${name} im ${age} 
my job is ${job} 
and im from ${city}`;

console.log(val);