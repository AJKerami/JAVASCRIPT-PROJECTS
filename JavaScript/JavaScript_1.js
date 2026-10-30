// Choose one message based on the animal selected in the HTML form.
function animal_Function() {
    const animal = document.getElementById("Animal_Input").value;
    let message;

    switch (animal) {
        case "dog":
            message = "A dog says woof!";
            break;
        case "cat":
            message = "A cat says meow!";
            break;
        case "rabbit":
            message = "A rabbit is usually quiet.";
            break;
        default:
            message = "Please choose an animal from the list.";
    }

    // break prevents one matching case from continuing into the next case.
    document.getElementById("Animal_Output").textContent = message;
}
