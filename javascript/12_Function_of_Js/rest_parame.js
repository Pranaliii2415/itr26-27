

// Example 1 : Collect Remaining Arguments

function displayData(first, second, ...others) {

    console.log("First Value :", first);
    console.log("Second Value :", second);
    console.log("Remaining Values :", others);
}

displayData(10, 20, 30);

displayData(10, 20, 30, 40, 50, 60, 70);



// Example 2 : Sum of Unlimited Numbers

function calculateTotal(...values) {

    let sum = 0;

    for (let value of values) {
        sum += value;
    }

    return sum;
}

console.log(calculateTotal(5, 10, 15));
console.log(calculateTotal(1, 2, 3, 4, 5, 6, 7, 8));



// Example 3 : Find Largest Number

function findLargest(...numbers) {

    let largest = numbers[0];

    for (let num of numbers) {

        if (num > largest) {
            largest = num;
        }

    }

    return largest;
}

console.log(findLargest(12, 45, 8, 90, 23));


