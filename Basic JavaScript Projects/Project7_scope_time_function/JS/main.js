// This global variable is available to the functions in this script.
var weeklyPracticeGoal = 5;

function showScope() {
    // This local variable exists only inside showScope().
    var todayPracticeHours = 1;
    document.getElementById("scopeResult").textContent = "Weekly goal: " + weeklyPracticeGoal + " hours. Today's example: " + todayPracticeHours + " hour.";
}

function showDateMessage() {
    var hour = new Date().getHours();
    var message = "The day is almost over.";
    // An if statement runs its block only when the condition is true.
    if (hour < 18) {
        message = "There is still time to practise today.";
    }
    document.getElementById("dateResult").textContent = message;
}

function checkPractice() {
    var input = document.getElementById("practiceHours");
    if (!input.reportValidity()) return;
    var hours = Number(input.value);
    if (hours >= 1) {
        document.getElementById("practiceResult").textContent = "You reached today's one-hour practice goal.";
    } else {
        document.getElementById("practiceResult").textContent = "Set aside more practice time to reach one hour.";
    }
}

function debugScopeError() {
    function createLocalVariable() {
        var localOnly = "This value belongs to createLocalVariable().";
        return localOnly;
    }
    createLocalVariable();
    try {
        // Intentional error: this variable is outside its defining function's scope.
        console.log(localOnly);
    } catch (error) {
        // Log the error without stopping the rest of the page's exercises.
        console.log("Scope error:", error.name, error.message);
        // Returning the value from its function is one way to fix this issue.
        console.log("Fixed value:", createLocalVariable());
        document.getElementById("debugResult").textContent = "The console shows the intentional scope error and the fixed value.";
    }
}

// Use the computer's local hour for the time-of-day exercise.
// && makes both parts of the morning condition necessary, including midnight.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time >= 0 && Time < 12) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").textContent = Reply;
}
