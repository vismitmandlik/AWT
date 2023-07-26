function display(){
        //string
    let name = "Vismit"

    //number 
    let age = 20

    //boolean
    let isMinor = false
    
    const outputmessage = document.getElementById("display")
    outputmessage.innerHTML = `Name: ${name}<br> Age: ${age}<br> Is Minor: ${isMinor}`
}

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
}


const num1 = 10;
const num2 = 20;
const result = addNumbers(num1, num2);
document.write(`<p>Sum of ${num1} and ${num2} is: ${result}</p>`);
