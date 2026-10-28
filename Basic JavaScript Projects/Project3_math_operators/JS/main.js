// Each function connects an arithmetic operation to its own HTML paragraph.
function addNumbers() {
    document.getElementById("addition").textContent = 15 + 5;
}

function subtractNumbers() {
    document.getElementById("subtraction").textContent = 15 - 5;
}

function multiplyNumbers() {
    document.getElementById("multiplication").textContent = 6 * 4;
}

function divideNumbers() {
    document.getElementById("division").textContent = 24 / 6;
}

// Parentheses determine which operations are calculated first.
function multipleOperations() {
    document.getElementById("multiple").textContent = (2 + 3) * 4 / 2 - 1;
}

// The modulus operator returns the remainder after division.
function remainder() {
    document.getElementById("modulus").textContent = 25 % 6;
}

function negateNumber() {
    var number = 10;
    document.getElementById("negation").textContent = -number;
}

// Change the variable before displaying it to demonstrate ++ and --.
function incrementNumber() {
    var number = 5;
    number++;
    document.getElementById("increment").textContent = number;
}

function decrementNumber() {
    var number = 5;
    number--;
    document.getElementById("decrement").textContent = number;
}

function randomNumber() {
    document.getElementById("random").textContent = Math.random();
}

// The Math object also supplies methods such as sqrt().
function squareRoot() {
    document.getElementById("mathObject").textContent = Math.sqrt(144);
}
