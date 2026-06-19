

const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

const removedItems = fruits.splice(1, 2);

console.log("Updated Array :", fruits);
console.log("Removed Items :", removedItems);



const colors = ["Red", "Blue", "Green"];

colors.splice(1, 0, "Yellow");

console.log("After Insertion :", colors);



const languages = ["HTML", "CSS", "PHP", "Java"];

const replacedItems = languages.splice(
    2,
    1,
    "JavaScript",
    "React"
);

console.log("Updated Languages :", languages);
console.log("Replaced Items :", replacedItems);



const subjects = [
    "Maths",
    "Science",
    "History",
    "English"
];

const deletedSubjects = subjects.splice(
    1,
    2,
    "Computer",
    "JavaScript"
);

console.log("Final Subjects :", subjects);
console.log("Deleted Subjects :", deletedSubjects);