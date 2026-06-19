
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(20); // Duplicate ignored
numbers.add(30);

console.log(numbers);

console.log(numbers.has(20)); // true
console.log(numbers.has(50)); // false



for (let value of numbers) {
    console.log(value);
}


const marks = [10, 20, 20, 30, 40, 40, 50];

const uniqueMarks = new Set(marks);

console.log(uniqueMarks);


console.log(uniqueMarks.size);