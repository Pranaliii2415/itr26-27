// ================= classList =================

const sectionTodo = document.querySelector(".section-todo");

// View all classes

console.log(sectionTodo.classList);

// ----------------------------------------------------

// Add a class

sectionTodo.classList.add("bg-dark");

// Remove a class

sectionTodo.classList.remove("bg-dark");

// Check if class exists

console.log(sectionTodo.classList.contains("bg-dark"));

// ----------------------------------------------------

// Toggle class

sectionTodo.classList.toggle("bg-dark");