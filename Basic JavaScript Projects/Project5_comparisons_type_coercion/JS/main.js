// typeof reports the type of the value stored in a variable.
var businessName = "Innovative Renovations";
document.write("<p>typeof businessName: " + typeof businessName + "</p>");

// With +, a string makes this number part of a combined string.
document.write("<p>String plus number: " + ("Projects: " + 3) + "</p>");

// == allows type conversion; === compares both type and value.
document.write("<p>10 == '10': " + (10 == "10") + "</p>");
document.write("<p>10 == 5: " + (10 == 5) + "</p>");
document.write("<p>10 === '10': " + (10 === "10") + "</p>");
document.write("<p>10 === 10: " + (10 === 10) + "</p>");
document.write("<p>10 === 5: " + (10 === 5) + "</p>");
document.write("<p>10 === '5': " + (10 === "5") + "</p>");

// Comparison and logical operators produce Boolean values.
document.write("<p>10 &gt; 5: " + (10 > 5) + "</p>");
document.write("<p>10 &lt; 5: " + (10 < 5) + "</p>");
document.write("<p>(10 &gt; 5) &amp;&amp; (3 &lt; 4): " + ((10 > 5) && (3 < 4)) + "</p>");
document.write("<p>(10 &lt; 5) || (3 &lt; 4): " + ((10 < 5) || (3 < 4)) + "</p>");
document.write("<p>!(10 &gt; 5): " + !(10 > 5) + "</p>");
document.write("<p>!(10 &lt; 5): " + !(10 < 5) + "</p>");

// NaN is a numeric value representing a failed numeric calculation.
document.write("<p>0 / 0: " + (0 / 0) + "</p>");
document.write("<p>isNaN('Wrench'): " + isNaN("Wrench") + "</p>");
document.write("<p>isNaN('12'): " + isNaN("12") + "</p>");
// Assign overflow results to the matching HTML elements.
document.getElementById("positiveInfinity").textContent = 2E310;
document.getElementById("negativeInfinity").textContent = -2E310;

// View this output with the browser's developer tools.
console.log("Boolean example: 10 < 5 is", 10 < 5);
