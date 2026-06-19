const values = [2, 4, 6, 8, 10];

const cubes = values.map(num => {
    return num ** 3;
});

console.log(cubes);

const details = values.map((num, index) => {
    return `Position ${index} : ${num}`;
});

console.log(details);

const employees = [
    { name: "Pranali", department: "Development" },
    { name: "Aarav", department: "Testing" },
    { name: "Sneha", department: "Design" },
    { name: "Rohan", department: "Support" }
];



const employeeNames = employees.map(employee => {
    return employee.name;
});

console.log(employeeNames);



const employeeInfo = employees.map(employee => {
    return {
        employeeName: employee.name,
        role: employee.department
    };
});

console.log(employeeInfo);