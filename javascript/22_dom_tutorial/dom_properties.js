//getElementbyID

console.log(window); // There is document object present where all the data

console.log(window.document); // Human readable representation of JS
console.dir(window.document); // JS Object what Browers See.

console.log(typeof document.getElementById("main-heading"));
// In Document Object Model --> document object of window object
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));

const headerELement = document.getElementById("main-heading");
______________________________________________________________


//getAttribute() and setAttribute()
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com");

console.log(link.getAttribute("href"));

const inputBox = document.querySelector("input");

console.log(inputBox.getAttribute("type"));

inputBox.setAttribute("type", "password");

console.log(inputBox.getAttribute("type"));
_____________________________________________________

// Method 1 : getElementsByClassName()

const menuItems = document.getElementsByClassName("nav-item");

console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[1]);

console.log(typeof menuItems);
console.log(Array.isArray(menuItems)); // false

// Method 2 : querySelectorAll()

const items = document.querySelectorAll(".nav-item");

console.log(items);
console.log(items[0]);
console.log(items[1]);

console.log(typeof items);
console.log(Array.isArray(items)); // false

