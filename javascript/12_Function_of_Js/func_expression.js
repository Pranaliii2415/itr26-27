// ================= Function Expressions =================

// A function expression stores a function inside a variable.


// Function without parameters

const greetUser = function () {
    console.log("Welcome to JavaScript!");
};

greetUser();
greetUser();

// Function with parameters

const subtract = function (num1, num2) {
    return num1 - num2;
};

const difference = subtract(20, 8);
console.log(difference);


// Function with three parameters

const findMaximum = function (a, b, c) {

    if (a >= b && a >= c) {
        return a;
    }

    if (b >= a && b >= c) {
        return b;
    }

    return c;
};

console.log(findMaximum(10, 25, 15));

// Check whether a number is odd

const isOdd = function (number) {
    return number % 2 !== 0;
};

console.log(isOdd(7));
console.log(isOdd(12));

// Return the last character of a string

const getLastChar = function (text) {
    return text[text.length - 1];
};

console.log(getLastChar("JavaScript"));


// Linear Search

const searchElement = function (arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            return i;
        }

    }

    return -1;
};

const numbers = [5, 10, 15, 20, 25];

console.log(searchElement(numbers, 20));
