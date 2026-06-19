

// Static List (querySelectorAll)

const staticItems = document.querySelectorAll(".todo-list li");

console.log("Before Add :", staticItems.length);

const newItem1 = document.createElement("li");
newItem1.textContent = "Item 6";

document.querySelector(".todo-list").append(newItem1);

console.log("After Add :", staticItems.length); // Same count

// ----------------------------------------------------

// Live List (getElementsByTagName)

const todoList = document.querySelector(".todo-list");

const liveItems = todoList.getElementsByTagName("li");

console.log("Before Add :", liveItems.length);

const newItem2 = document.createElement("li");
newItem2.textContent = "Item 7";

todoList.append(newItem2);

console.log("After Add :", liveItems.length); // Updated count