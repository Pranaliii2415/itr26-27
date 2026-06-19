const employee = new Map();

employee.set("name", "Pranali");
employee.set("age", 17);
employee.set(101, "Employee ID");

console.log(employee);

// Access values

console.log(employee.get("name"));
console.log(employee.get("age"));
console.log(employee.get(101));


for (let [key, value] of employee) {
    console.log(`${key} : ${value}`);
}



const course = new Map([
    ["courseName", "JavaScript"],
    ["duration", "3 Months"]
]);

console.log(course);


const student = {
    id: 1,
    name: "Pranali"
};

const extraDetails = new Map();

extraDetails.set(student, {
    city: "Pune",
    grade: "A"
});

console.log(extraDetails.get(student).city);
console.log(extraDetails.get(student).grade);