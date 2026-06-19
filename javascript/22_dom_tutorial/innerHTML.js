// Inner HTML in JavaScript :


const headLine = document.querySelector(".headline");
console.log(headLine);

// Fetching Inner html
console.log(headLine.innerHTML);

// Making changes in inner HTML
headLine.innerHTML = "<h1>Inner Html Changed So Manage </h1>";
headLine.innerHTML += "<button class =\"btn btn-headline\">Learn More<button>";


console.log(headLine.innerHTML);
