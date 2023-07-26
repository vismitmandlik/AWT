function Factorial(number) {
    
    let result = 1;
  
    
    function Recursive(num) {
      if (num === 0 || num === 1) {
        return 1;
      } 
      else {
        
        result = num * Recursive(num - 1);
        return result;
      }
    }
  
    result = Recursive(number);
  
    return result;
  }
  
// function Input() {
//     const userInput = prompt("Enter a number to calculate its factorial:");
//     const Number = parseInt(userInput);
// }
// Input()
  const Number = 25;
  const Result = Factorial(Number);
  console.log(`Factorial of ${Number} is: ${Result}`);
  