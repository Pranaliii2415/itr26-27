
const marks = [70, 85, 90, 65, 80];

const totalMarks = marks.reduce((total, mark) => {
    return total + mark;
}, 0);

console.log("Total Marks :", totalMarks);



const scores = [12, 45, 8, 90, 23];

const highestScore = scores.reduce((max, current) => {

    if (current > max) {
        return current;
    }

    return max;

}, scores[0]);

console.log("Highest Score :", highestScore);



const products = [
    { id: 1, name: "Headphones", price: 1500 },
    { id: 2, name: "Keyboard", price: 2500 },
    { id: 3, name: "Monitor", price: 12000 },
    { id: 4, name: "Mouse", price: 800 }
];

const totalAmount = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log("Total Amount :", totalAmount);



const letters = ["a", "b", "c", "d"];

const word = letters.reduce((result, letter) => {
    return result + letter;
}, "");

console.log(word);