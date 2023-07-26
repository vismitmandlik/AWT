let numbersArray = [61, 'Vismit', id=63, 47, 52];

console.log("Length of the array:", numbersArray.length);

console.log("Element at index 2:", numbersArray[2]);

numbersArray.push(60); 
console.log("After push:", numbersArray);

numbersArray.pop(); 
console.log("After pop:", numbersArray);

numbersArray.shift();
console.log("After shift:", numbersArray);

numbersArray.unshift(5);
console.log("After unshift:", numbersArray);

console.log("Joined array as string:", numbersArray.join(", ")); 

delete numbersArray[1]; 
console.log("After delete:", numbersArray);

let secondArray = [70, 80];
let combinedArray = numbersArray.concat(secondArray); 
console.log("Concatenated array:", combinedArray);

let flattenedArray = combinedArray.flat(); 
console.log("Flattened array:", flattenedArray);

let splicedArray = combinedArray.splice(2, 2, 100, 200); 
console.log("After splice:", combinedArray);

let slicedArray = combinedArray.slice(1, 4); 
console.log("Sliced array:", slicedArray);


let person = {
    name: "Vismit Mandlik",
    age: 20,
    gender: "Male"
};
  
  
function displayPersonDetails() {
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Gender:", person.gender);
}



