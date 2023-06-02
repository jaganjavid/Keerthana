let val;

const today = new Date();

let birthday = new Date("05-09-1996 11:20:00")


val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// console.log(val);

birthday.setMonth(2);
birthday.setDate(2);
birthday.setFullYear(2000);
birthday.setHours(5);
birthday.setMinutes(5);
birthday.setSeconds(5);


console.log(birthday);



// console.log(new Date());