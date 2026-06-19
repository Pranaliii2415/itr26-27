// ================= Object Cloning =================

const student = {
    name: "Pranali",
    age: 17
};

// Using Object.assign()

const studentCopy = Object.assign({}, student);

student.city = "Pune";

console.log("Original :", student);
console.log("Copy :", studentCopy);

// --------------------------------------------

// Using Spread Operator

const userCopy = { ...student };

console.log("Spread Copy :", userCopy);

// --------------------------------------------

// Direct Assignment (Not Cloning)

const sameReference = student;

student.country = "India";

console.log("Original :", student);
console.log("Same Reference :", sameReference);