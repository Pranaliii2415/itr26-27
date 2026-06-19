// ================= textContent vs innerText =================

const heading = document.getElementById("main-heading");

// Get text

console.log(heading.textContent);
console.log(heading.innerText);

// Change text

heading.textContent = "Welcome to JavaScript!";