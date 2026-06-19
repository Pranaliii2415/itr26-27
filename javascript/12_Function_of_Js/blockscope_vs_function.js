{
    let city = "Mumbai";
    const country = "India";

    console.log(city);
    console.log(country);
}

// console.log(city);     // Error
// console.log(country);  // Error
{
    let username = "Pranali";
    console.log("Inside Block :", username);
}

let username = "Guest";
console.log("Outside Block :", username);

{
    var score = 95;
}

console.log(score);



let language = "JavaScript";

function showLanguage() {

    if (true) {
        let language = "Python";
        console.log("Inside Block :", language);
    }

    console.log("Outside Block :", language);
}

showLanguage();