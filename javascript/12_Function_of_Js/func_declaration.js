// ================= Function Declaration =================

// Function to display a message

function showMessage() {
    console.log("Welcome to JavaScript Functions!");
}

showMessage();
showMessage();

// ----------------------------------------------------

// Function with no parameters

function getNumber() {
    return 100;
}

const value = getNumber();
console.log(value);

// ----------------------------------------------------

// Function with parameters

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 4));

// ----------------------------------------------------

// Function with three parameters

function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calculateAverage(10, 20, 30));

// ----------------------------------------------------

// Check whether a number is positive

function isPositive(number) {
    return number > 0;
}

console.log(isPositive(15));
console.log(isPositive(-5));

// ----------------------------------------------------

// Return last character of a string

function getLastCharacter(text) {
    return text[text.length - 1];
}

console.log(getLastCharacter("JavaScript"));

// ----------------------------------------------------

// Find an element in an array

function findIndex(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return i;
        }

    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(findIndex(numbers, 40));