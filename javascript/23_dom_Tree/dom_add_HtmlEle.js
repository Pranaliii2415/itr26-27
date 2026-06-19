// ================= Add New Element Using JavaScript =================

// Create a new <li> element

const newTask = document.createElement("li");

newTask.textContent = "Learn JavaScript";

// Select parent element

const todoList = document.querySelector(".todo-list");

// Add new element

todoList.append(newTask);