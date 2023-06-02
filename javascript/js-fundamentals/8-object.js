// Key:value or name:value

const person = {
    // properties
    firstName:"Jagan", 
    lastName:"Javid",
    age:27,
    email:"jj@gmail.com",
    hasGun:true,
    hobbies:["music", "sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Methode
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getThis: function(){
        console.log(this);
    }
}

let val;

val = person;
val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasGun;
val = person.hobbies[1];
val = person.address.city;
val = person.address.state;
val = person.getFullName();
val = person.getThis();



console.log(val);

