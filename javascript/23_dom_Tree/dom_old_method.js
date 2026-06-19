

const todoList = document.querySelector(".todo-list");

// ----------------------------------------------------
// 1. appendChild()

const task = document.createElement("li");
task.textContent = "Learn JavaScript";

todoList.appendChild(task);

// ----------------------------------------------------
// 2. insertBefore()

const newTask = document.createElement("li");
newTask.textContent = "First Task";

const firstItem = document.querySelector(".todo-list li");

todoList.insertBefore(newTask, firstItem);

// ----------------------------------------------------
// 3. replaceChild()

const updatedTask = document.createElement("li");
updatedTask.textContent = "Updated Task";

todoList.replaceChild(updatedTask, firstItem);

// ----------------------------------------------------
// 4. removeChild()

todoList.removeChild(updatedTask);