// You will work with this following array of objects for all your challenges. Do not change the array at all. 
const planets = [
    { 
        id: 0,
        name: "Mercury",
        numOfMoons: 0
    },
    {
        id: 1,
        name: "Venus",
        numOfMoons: 0
    },
    {
        id: 2,
        name: "Earth",
        numOfMoons: 1
    },
    {
        id: 3,
        name: "Mars",
        numOfMoons: 2
    },
    {
        id: 4,
        name: "Jupiter",
        numOfMoons: 79
    },
    {
        id: 5,
        name: "Saturn",
        numOfMoons: 62
    },
    {
        id: 6,
        name: "Uranus",
        numOfMoons: 27
    },    
    {
        id: 7,
        name: "Neptune",
        numOfMoons: 14
    }, 
]

// Map challenges begin below.

const planetNamesUpperCased = planets.map(planets => planets.name.toUpperCase()); 
console.log(planetNamesUpperCased);
// The console should say: ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"]

// FILTER CHALLENGE 1
const planetId = 7;
const planetNameById = planets.filter(planets => planets.id === 7)[0];
// const planetNameById = planets.find(planets => planets.id === 7);
// Why is the [0] at the end needed? Make sure you think this through and understand it before you continue.
// The console should say: "Neptune"
console.log(planetNameById.name);

// FILTER CHALLENGE 2
// Filter out just the object with the given name in planetName, then console.log its numOfMoons - use template literal syntax.
const planetName= "Earth";
const planetNumMoonsByName = planets.filter(planet => planet.name ===`${planetName}`).map(planet => planet.numOfMoons);
// The console should say: "Earth's number of moons is: 1"
console.log(`${planetName}'s number of moons is: ${planetNumMoonsByName}`);

// REDUCE CHALLENGE
// Use reduce to sum up the total of all moons in our solar system into a variable named moonsTotal.
const moonsTotal = planets.reduce((total, planets) => total + planets.numOfMoons,0)
// The console should say: 185
console.log(moonsTotal); 

// METHOD CHAINING CHALLENGE
// First, use the filter method to filter out only the planets that have moons.
// Then, use the map method to create a new array that only contains the names of the planets that have 1 or more moons.
// Do this using method chaining.

const planetNamesWithMoons = planets.filter(planets => planets.numOfMoons >=1).map(planets =>planets.name)
// The console should say: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
console.log(planetNamesWithMoons);