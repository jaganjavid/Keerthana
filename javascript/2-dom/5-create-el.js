// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
li.id = "list-1";

// Add Attribute
li.setAttribute("title", "new Item");

// Create a text node and append
li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// add Class 
link.className = "delete-item secondary-content";

// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append the a to li
li.appendChild(link);

// Add li to the UL
document.querySelector(".collection").appendChild(li);

