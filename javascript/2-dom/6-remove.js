// Replace Element

const newHeading = document.createElement("h2");

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task Title"));

const oldHeading = document.getElementById("task-title");

const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);


// Remove Element

const list = document.querySelectorAll("li"); //nodelist

// list[0].remove();
// list[1].remove();
// list[2].remove();
// list[3].remove();
// list[4].remove();

// Class & Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0]; 

let val;

val = link.className; // string
val = link.classList; // dom token list

val.add("Jagan");

val.remove("test");

console.log(val.contains("delete-item"));

val.replace("delete-item", "add-item");





