// ================= Object Destructuring =================

const movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    genre: "Sci-Fi"
};

// Extracting properties from the object

let {
    title: movieTitle,
    director: movieDirector,
    ...remainingDetails
} = movie;

console.log(movieTitle);
console.log(movieDirector);
console.log(remainingDetails);

// Object Destructuring Example

const student = {
    studentName: "Prana",
    course: "JavaScript",
    duration: "3 Months",
    mode: "Online"
};

const {
    studentName,
    course,
    ...extraInfo
} = student;

console.log("Name :", studentName);
console.log("Course :", course);
console.log("Other Details :", extraInfo);