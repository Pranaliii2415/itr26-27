function displayUser(userName) {
    console.log("Inside displayUser function");
    console.log(`Welcome, ${userName}!`);
}

function processTask(taskCompleted) {

    console.log("Task is being processed...");
    console.log("Task completed successfully.");

    // Executing the callback function
    taskCompleted("Pranali");
}

// Passing function as an argument
processTask(displayUser);