let x = 10;
const PI = 3.14;

const add = (a, b) => a + b;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("cherry");

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
const r1 = new Rectangle(5, 5);  
function result(){
    console.log(`Height : ${r1.height} and width: ${r1.width}`);
}

const fetchData = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    const data = "Data fetched successfully!";
    resolve(data);
  }, 2000);
});

fetchData.then((data) => console.log(data));

const mySymbol = Symbol("unique");
console.log(mySymbol);

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); 
greet("Vismit"); 

function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 
