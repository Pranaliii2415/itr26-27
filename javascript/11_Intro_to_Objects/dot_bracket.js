const person = {
    name : "Pranali",
    age : 17,
    "person hobbie" : ["chess","games","sketches"]
}


console.log(person.person hobbie); // invalid error

console.log(person["person hobbie"]);

const key = "email";

const person = {
    name : "Pranali",
    age : 17,
    "person hobbie" : ["chess","games","sketches"]
}

person.key = "abcd2323@gmail.com";
person["key"] = "abcd2323@gmail.com";
person[key] = "abcd2323@gmail.com";
console.log(person);

