
function validateInput() {
    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        showAlert("Please enter valid numbers.");
        return false;
    }

    return true;
}


function showAlert(message) {
    alert(message);
}


function addition() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const sum = firstNumber + secondNumber;

    document.getElementById("answer").value = sum;
}


function subtraction() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const result = firstNumber - secondNumber;

    document.getElementById("answer").value = result;
}


function multiplication() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);
    const result = firstNumber * secondNumber;

    document.getElementById("answer").value = result;
}


function division() {
    if (!validateInput()) {
        return;
    }

    const firstNumber = parseInt(document.getElementById("firstnumber").value);
    const secondNumber = parseInt(document.getElementById("secondnumber").value);

    if (secondNumber === 0) {
        showAlert("Cannot divide by zero.");
        return;
    }

    const result = firstNumber / secondNumber;

    document.getElementById("answer").value = result;
}
