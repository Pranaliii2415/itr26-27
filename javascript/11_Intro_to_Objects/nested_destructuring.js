// Nested Destructuring Example

const employees = [
    {
        id: 101,
        name: "Pranali",
        department: "Development"
    },
    {
        id: 102,
        name: "Tanu",
        department: "Testing"
    },
    {
        id: 103,
        name: "zoya",
        department: "Design"
    },
    {
        id: 104,
        name: "Anju",
        Department: "Testing"
    }

];



const [emp1, emp2, emp3, emp4] = employees;

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);

const [
    { name: firstEmployee, id: employeeId },
    ,
    { department: lastEmployeeDept }
] = employees;

console.log(firstEmployee);
console.log(employeeId);
console.log(lastEmployeeDept);