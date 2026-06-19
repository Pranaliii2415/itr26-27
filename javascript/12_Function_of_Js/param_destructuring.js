
// Object
const student = {
    name: "Pranali",
    course: "JavaScript",
    age: 17
};

// Without Parameter Destructuring

function displayStudentInfo(studentData) {
    console.log(studentData.name);
    console.log(studentData.course);
    console.log(studentData.age);
}

displayStudentInfo(student);



// With Parameter Destructuring

function showStudentDetails({ name, course, age }) {
    console.log(name);
    console.log(course);
    console.log(age);
}

showStudentDetails(student);



// Renaming Variables while Destructuring

function printDetails({ name: studentName, age: studentAge }) {
    console.log(`Name : ${studentName}`);
    console.log(`Age : ${studentAge}`);
}

printDetails(student);

