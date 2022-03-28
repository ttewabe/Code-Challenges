const pets = ["goldfish", "dog", "turtle", "tiger"]

//1 
const petsShortNames = pets.filter(pets => pets.length < 6)
// The below line should console.log: ["dog", "tiger"]
console.log(petsShortNames);

//2 - uncomment line 9 and line 11 when you've finished challenge 1
const pets1 = ["goldfish", "dog", "turtle", "tiger"]
const petsTNames = pets1.filter( pets1 => pets1.includes("t"))
// The below line should console.log: ["turtle", "tiger"] 
console.log(petsTNames);


//3 - uncomment line 15 and line 17
const numbers = [3, 7, 4, 5, 10]; 
const numbersBiggerThanFour = numbers.filter(numbers => numbers > 4)
// The below line should console.log: [7, 5, 10]
console.log(numbersBiggerThanFour);
//Bonus - uncomment line 20 and line 22
const number = [3, 7, 4, 5, 10]; 
const evenNumbers = number.filter( number => number % 2 === 0)
//The below line should console.log: [4, 10]
console.log(evenNumbers);

