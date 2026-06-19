const showMessage = () => {
    console.log("Welcome to JavaScript!");
};

showMessage();

const multiply = (a, b) => {
    return a * b;
};

const product = multiply(5, 4);
console.log(product);

const calculateTotal = (x, y, z) => {
    return x + y + z;
};

console.log(calculateTotal(10, 20, 30));

const checkPositive = number => number > 0;

console.log(checkPositive(15));
console.log(checkPositive(-5));

const getFirstLetter = text => text[0];

console.log(getFirstLetter("JavaScript"));

const findElement = (numbers, target) => {

    for (let index = 0; index < numbers.length; index++) {

        if (numbers[index] === target) {
            return index;
        }

    }

    return -1;
};

const nums = [5, 10, 15, 20, 25];

console.log(findElement(nums, 20));

const isOdd = value => value % 2 !== 0;

console.log(isOdd(7));
console.log(isOdd(10));
