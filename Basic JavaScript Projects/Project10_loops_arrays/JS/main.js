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
