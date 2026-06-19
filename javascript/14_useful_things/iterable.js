const userName = "Pranali";

for (let char of userName) {
    console.log(char);
}

const marks = [75, 80, 90, 95];

for (let mark of marks) {
    console.log(mark);
}

// Objects are NOT iterable

const student = {
    name: "Pranali",
    age: 17
};

// for (let value of student) {
//     console.log(value);
// }
// Error: student is not iterable


// Array-Like Objects

const text = "JavaScript";

console.log(text.length); // 10
console.log(text[4]);     // S

