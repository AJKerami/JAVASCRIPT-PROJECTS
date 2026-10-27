// This function runs when the user clicks the button in index.html.
function showBusinessGoal() {
    // Start with a string stored in a local variable.
    var goal = "I want to build websites for my renovation business and mechanic shop";

    // Append the second part of the sentence using the += operator.
    goal += " by practising my JavaScript skills.";

    // Find the paragraph by its ID and display the combined sentence.
    document.getElementById("businessGoal").textContent = goal;
}
