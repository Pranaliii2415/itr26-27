


const marks = [75, 80, 65, 90];

// Using a normal function

marks.forEach(function(mark, index) {
    console.log(`Student ${index + 1} scored ${mark} marks`);
});

marks.forEach((mark, index) => {
    console.log(`${mark} + 5 = ${mark + 5} (Index: ${index})`);
});

const students = [
    { name: "Pranali", course: "JavaScript" },
    { name: "Aarav", course: "Python" },
    { name: "Sneha", course: "Java" },
    { name: "Rohan", course: "C++" }
];



students.forEach(student => {
    console.log(student.name);
});



// Using for...of Loop

for (let student of students) {
    console.log(`${student.name} - ${student.course}`);
}



// Using forEach with index

students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name}`);
});