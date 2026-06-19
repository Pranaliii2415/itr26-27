function calculateSum1(num1, num2) {

    // If second argument is not provided
    // assign a default value manually
    if (typeof num2 === "undefined") {
        num2 = 0;
    }

    return num1 + num2;
}

console.log("Before ES6:");
console.log(calculateSum1(10));      // 10
console.log(calculateSum1(10, 5));   // 15



// ES6 Default Parameters

function calculateSum2(num1, num2 = 0) {

    // If num2 is not passed,
    // JavaScript automatically uses 0
    return num1 + num2;
}

console.log("\nUsing ES6 Default Parameters:");
console.log(calculateSum2(20));      // 20
console.log(calculateSum2(20, 10));  // 30


function greetUser(userName = "Guest") {
    console.log(`Welcome, ${userName}!`);
}

console.log("\nGreeting Example:");

greetUser();          // Welcome, Guest!
greetUser("Pranali"); // Welcome, Pranali!