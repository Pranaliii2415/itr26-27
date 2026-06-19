

const todoList = document.querySelector(".todo-list");

// Create new element

const task = document.createElement("li");
task.textContent = "Learn JavaScript";

// Add at end

todoList.append(task);

// Clone the element

const copiedTask = task.cloneNode(true);

// Add cloned element at beginning

todoList.prepend(copiedTask);

console.log(copiedTask);