

const todoList = document.querySelector(".todo-list");

// Add inside the element at the beginning

todoList.insertAdjacentHTML(
    "afterbegin",
    "<li>First Task</li>"
);

// Add inside the element at the end

todoList.insertAdjacentHTML(
    "beforeend",
    "<li>Last Task</li>"
);

// Add before the element

todoList.insertAdjacentHTML(
    "beforebegin",
    "<p>Before Todo List</p>"
);

// Add after the element

todoList.insertAdjacentHTML(
    "afterend",
    "<p>After Todo List</p>"
);