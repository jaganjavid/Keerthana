

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);
// console.log(document.getElementById("task-title").textContent);

const taskTitle = document.getElementById("task-title");

// Change Style
taskTitle.style.background = "blue";
taskTitle.style.color = "white";
taskTitle.style.padding = "10px";

// Change Content
taskTitle.textContent = "Hello";
taskTitle.innerText = "Hello Jagan";
taskTitle.innerHTML = "<p>Hello Javid</p>";


// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".collection-item"));

document.querySelector("li").style.color = "green";
document.querySelector("li").style.color = "brown";
document.querySelector("li").style.background = "lightblue";
document.querySelector("li").textContent = "lightblue";

