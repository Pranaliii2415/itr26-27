

const numbers1 = [10, 20, 30];
const numbers2 = [40, 50, 60];

const combinedNumbers = [...numbers1, ...numbers2, 70, 80];

console.log(combinedNumbers);




const word = "JavaScript";

const letters = [...word];

console.log(letters);





const student = {
    name: "Prana",
    course: "JavaScript"
};

const details = {
    city: "Pune",
    duration: "3 Months"
};

const studentInfo = {
    ...student,
    ...details
};

console.log(studentInfo);


const objA = {
    id: 101,
    name: "Pranali"
};

const objB = {
    id: 202,
    batch: "Morning"
};

// Later value overrides earlier value
const mergedObject = {
    ...objA,
    ...objB
};

console.log(mergedObject);


const finalObject = {
    ...objA,
    ...objB,
    status: "Active"
};

console.log(finalObject);


const stringObject = {
    ..."HELLO"
};

console.log(stringObject);


const arrayObject = {
    ...["HTML", "CSS", "JavaScript"]
};

console.log(arrayObject);