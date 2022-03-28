// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(num => num + 5); 
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 
// 2
const numbers1 = ['1:', '1:', '2:', '3:', '5:'];
const numbersReformatted = numbers1.map(num => num + " "); 

console.log(numbersReformatted);

// 3
const words = ["planes", "trains", "automobiles"];
const singularWords = words.map(words => words.slice(0, -1));
// The below line should console.log: ["plane", "train", "automobile"]
console.log(singularWords);
// 4
const words1 = ["planes", "trains", "automobiles"];
const firstLetters = words1.map(words1 => words1.slice(0,1));
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus:
const words2 = ["planes", "trains", "automobiles"];
const capitalizedWords = words2.map(words2 => words2.charAt(0).toUpperCase() + words2.slice(1));
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);