

const todoList = document.querySelector(".todo-list");

// Create new element

const newTask = document.createElement("li");
newTask.textContent = "Learn JavaScript";

// Add at end

todoList.append(newTask);

// Add at beginning

todoList.prepend(newTask.cloneNode(true));

// ----------------------------------------------------

// Remove first list item

const firstTask = document.querySelector(".todo-list li");
firstTask.remove();

// ----------------------------------------------------

// Add element before the list

const beforeTask = document.createElement("p");
beforeTask.textContent = "Before Todo List";

todoList.before(beforeTask);

// ----------------------------------------------------

// Add element after the list

const afterTask = document.createElement("p");
afterTask.textContent = "After Todo List";

todoList.after(afterTask);