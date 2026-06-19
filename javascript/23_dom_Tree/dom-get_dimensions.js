// ================= Element Dimensions =================

const sectionTodo = document.querySelector(".section-todo");

// Get complete position and size information

const info = sectionTodo.getBoundingClientRect();

console.log(info);

// Individual properties

console.log("Width :", info.width);
console.log("Height :", info.height);
console.log("Top :", info.top);
console.log("Bottom :", info.bottom);
console.log("Left :", info.left);
console.log("Right :", info.right);