// Root Node

const rootNode = document.getRootNode();
console.log(rootNode);

// HTML Element

const htmlElement = rootNode.childNodes[0];
console.log(htmlElement);

// Head & Body

const head = document.querySelector("head");
const body = document.body;

console.log(head);
console.log(body);

// Parent Node

const heading = document.querySelector("h1");
console.log(heading.parentNode);

// Next Element Sibling

const title = document.querySelector("title");
console.log(title.nextElementSibling);

// Child Nodes vs Children

const container = document.querySelector(".container");

console.log(container.childNodes); // Includes text nodes
console.log(container.children);   // Only element nodes

// Change Parent Element Style

const parentDiv = heading.parentNode;

parentDiv.style.backgroundColor = "#333";
parentDiv.style.color = "#fff";