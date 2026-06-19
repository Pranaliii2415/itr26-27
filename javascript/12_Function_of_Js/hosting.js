

// Function Declaration Hoisting

displayMessage();

function displayMessage() {
    console.log("Function Declaration is Hoisted");
}

// ----------------------------------------------------

// Variable Hoisting with var

console.log(userName); // undefined

var userName = "Pranali";

console.log(userName); // Pranali



const showGreeting = function () {
    console.log("Hello Everyone!");
};

