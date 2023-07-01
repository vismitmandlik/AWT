function calculate() {
    
    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        showAlert("Please enter valid numbers.");
        return;
    }

    
    function displayAnswer(id, operator, result) {
        document.getElementById(id).innerHTML = `${operator} ${result}`;
    }

    
    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    const quotient = firstNumber / secondNumber;

    
    displayAnswer("addition", "Addition =", sum);
    displayAnswer("subtraction", "Subtraction =", difference);
    displayAnswer("multiplication", "Multiplication =", product);
    displayAnswer("division", "Division =", quotient);
}


function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.innerHTML = message;
    alertBox.style.display = "block";

    
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}
