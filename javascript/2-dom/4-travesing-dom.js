let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:first-child");


val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;


// 1 - Element
// 3 - Text Node
// 8 - comment

// Get the children element nodes

val = list.children; // ***
val = list.children[0];
val = list.children[1];
val = list.children[1].textContent;
val = list.children[0].children[0].children[0];

// FirstChild
val = list.firstChild;
val = list.firstElementChild; // ***

// Lastchild
val = list.lastChild;
val = list.lastElementChild; // ***

// Count child element
val = list.childElementCount;

// Get parent Node
val = list.parentNode;
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get Previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// Get Next Sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);