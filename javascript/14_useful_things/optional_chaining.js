

const student = {
    name: "Pranali",
    contact: {
        city: "Pune"
    }
};

console.log(student?.name);
console.log(student?.contact?.city);



const user = {
    name: "Aarav"
    // address property is missing
};

console.log(user?.name);           // Aarav
console.log(user?.address);        // undefined
console.log(user?.address?.city);  // undefined

// Without Optional Chaining

// console.log(user.address.city);
// Error: Cannot read properties of undefined

// ----------------------------------------------------

/*
Optional Chaining Syntax:

object?.property
object?.property?.subProperty

If any property is undefined or null,
JavaScript returns undefined instead of throwing an error.
*/