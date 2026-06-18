const student = {
    fullName: "Pranali",
    age: 17,
    hobbies: ["Chess", "Gaming", "Sketching"]
};

for (let property in student) {
    console.log(`${property} =>`, student[property]);
}

const allKeys = Object.keys(student);

for (let item of allKeys) {
    console.log("Key :", item);
    console.log("Value :", student[item]);
}

const allValues = Object.values(student);

console.log("Values :", allValues);

console.log(Array.isArray(allValues));


const entries = Object.entries(student);

for (let [key, value] of entries) {
    console.log(`${key} --> ${value}`);
}
