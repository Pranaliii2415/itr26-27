const cities = ["Mumbai", "Pune", "Delhi", "Nagpur", "Bangalore"];

cities.sort();

console.log("Sorted Cities :", cities);

const marks = [85, 20, 100, 45, 60];

const ascendingMarks = [...marks].sort((a, b) => {
    return a - b;
});

console.log("Ascending :", ascendingMarks);

const descendingMarks = [...marks].sort((a, b) => {
    return b - a;
});

console.log("Descending :", descendingMarks);


const students = [
    { name: "Pranali", score: 92 },
    { name: "Aarav", score: 75 },
    { name: "Sneha", score: 88 },
    { name: "Rohan", score: 65 }
];


const lowToHigh = [...students].sort((a, b) => {
    return a.score - b.score;
});

console.log("Low to High :", lowToHigh);

const highToLow = [...students].sort((a, b) => {
    return b.score - a.score;
});

console.log("High to Low :", highToLow);



console.log("Original Students :", students);