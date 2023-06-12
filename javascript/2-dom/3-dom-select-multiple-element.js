
// console.log(document.getElementsByClassName("collection-item"));

const items = document.getElementsByClassName("collection-item"); // HTML COLLECTION

items[0].style.color = "blue";
items[1].style.color = "green";

// for(let i = 0; i<items.length; i++){
//     items[i].style.color = "blue";
// }

// CONVERT HTMLCOLLECTION TO ARRAY

let lists = Array.from(items);

lists.forEach(function(item){
    item.style.background = "blue"
    item.style.color = "white"
})


// document.querySelector("#task-title").innerText = "Hello";
// document.querySelector("#task-title").innerHTML = "<p>Hello</p>";

