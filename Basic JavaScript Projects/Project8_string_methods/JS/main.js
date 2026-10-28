// concat() joins two or more strings and displays the result in a paragraph.
function fullSentence() {
  const first = "I am learning ";
  const second = "JavaScript to build ";
  const third = "professional websites.";
  document.getElementById("Concatenate").innerHTML = first.concat(second, third);
}

// slice() returns part of a string without modifying the original string.
function sliceMethod() {
  const sentence = "My friend Johnny is learning JavaScript.";
  document.getElementById("Slice").innerHTML = sentence.slice(10, 16);
}

// toUpperCase() returns uppercase text; search() returns a match position or -1.
function moreMethods() {
  const message = "Learn JavaScript and build websites.";
  document.getElementById("Uppercase").innerHTML = message.toUpperCase();
  document.getElementById("Search").innerHTML = message.search(/JavaScript/);
}

// toString() converts a number to its string representation.
function stringMethod() {
  const number = 182;
  document.getElementById("NumberToString").innerHTML = number.toString();
}

// toPrecision() returns a string with the specified number of significant digits.
function precisionMethod() {
  const number = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = number.toPrecision(10);
}

// toFixed() specifies decimal places; valueOf() unwraps a Number object.
function newMethods() {
  const price = 12.3456;
  const wrappedNumber = new Number(42);
  document.getElementById("Fixed").innerHTML = price.toFixed(2);
  document.getElementById("ValueOf").innerHTML = wrappedNumber.valueOf();
}
