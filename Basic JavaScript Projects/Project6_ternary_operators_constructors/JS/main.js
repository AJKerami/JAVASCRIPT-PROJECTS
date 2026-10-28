// Validate the browser input before using a ternary expression.
function checkHeight() {
    var input = document.getElementById("height");
    if (!input.reportValidity()) return;
    var height = Number(input.value);
    var result = height >= 120 ? "You meet the ride's height requirement." : "You are too short for this ride.";
    document.getElementById("rideResult").textContent = result;
}

function checkAge() {
    var input = document.getElementById("age");
    if (!input.reportValidity()) return;
    var age = Number(input.value);
    document.getElementById("ageResult").textContent = age >= 18 ? "You meet the voting age requirement." : "You are not old enough to vote.";
}

// A constructor uses this to assign properties to each new instance.
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

// new creates an object using the constructor above.
var exampleVehicle = new Vehicle("Ford", "F-150", 2018, "blue");

function showVehicle() {
    document.getElementById("vehicleResult").textContent = exampleVehicle.year + " " + exampleVehicle.color + " " + exampleVehicle.make + " " + exampleVehicle.model;
}

function showNestedFunction() {
    var number = 10;
    // This nested function can access its outer function's local variable.
    function addOne() {
        number += 1;
    }
    addOne();
    document.getElementById("nestedResult").textContent = number;
}

// Reserved keyword challenge: var return = 5; would cause a SyntaxError.
// It remains a comment so the valid exercises on this page can still run.
