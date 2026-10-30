// Display the numbers 1 through 10 using a while loop.
function Call_Loop() {
    let number = 1;
    let output = "";
    // Repeat while the number is no greater than 10.
    while (number <= 10) {
        output += number + "<br>";
        // Increase the number so that the loop eventually stops.
        number++;
    }
    // Insert the numbers and line breaks into the matching HTML paragraph.
    document.getElementById("Loop").innerHTML = output;
}

// Read the input and display its length, including any spaces.
function showLength() {
    const text = document.getElementById("text").value;
    // length counts UTF-16 code units; some emoji use more than one.
    document.getElementById("Length").textContent =
        "String length: " + text.length;
}

// Store instrument names in an array and display them with a for loop.
function for_Loop() {
    const instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    let output = "";
    // Array indexes start at zero. Stop before reaching the array's length.
    for (let index = 0; index < instruments.length; index++) {
        output += instruments[index] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = output;
}

// Create an object with let and display the result of its method.
function showObject() {
    // These properties describe one example vehicle.
    let vehicle = {
        make: "Ford",
        model: "F-150",
        year: 2018,
        // A function stored on an object is called a method.
        description: function () {
            // this refers to the vehicle when vehicle.description() is called.
            return this.year + " " + this.make + " " + this.model;
        }
    };
    // Call the object's method and show its returned text on the page.
    document.getElementById("Object_Details").textContent = vehicle.description();
}

// Display the original properties of an object declared with const.
function constant_initial_function() {
    const instrument = { type: "Guitar", color: "black", brand: "Fender" };
    document.getElementById("Constant").innerHTML =
        "Original instrument: a " + instrument.color + " " +
        instrument.brand + " " + instrument.type + ".";
}

// const prevents reassignment of the object, but its properties can change.
function constant_function() {
    const instrument = { type: "Guitar", color: "black", brand: "Fender" };
    // Change an existing property and add a new property.
    instrument.color = "red";
    instrument.price = 500;
    document.getElementById("Constant").innerHTML =
        "Updated instrument: a " + instrument.color + " " +
        instrument.brand + " " + instrument.type +
        ". Its price is $" + instrument.price + ".";
}

// break exits the loop completely when number reaches 5.
function showBreakLoop() {
    const numbers = [];
    for (let number = 1; number <= 10; number++) {
        if (number === 5) {
            break;
        }
        numbers.push(number);
    }
    document.getElementById("Break_Output").textContent = numbers.join(", ");
}

// Read a single array item using its zero-based index.
function showArrayExample() {
    const colors = ["blue", "green", "orange"];
    document.getElementById("Array").textContent =
        "The second color in the array is " + colors[1] + ".";
}

// continue skips only the current iteration, so 5 is omitted.
function showContinueLoop() {
    const numbers = [];
    for (let number = 1; number <= 10; number++) {
        if (number === 5) {
            continue;
        }
        numbers.push(number);
    }
    document.getElementById("Continue_Output").textContent = numbers.join(", ");
}
