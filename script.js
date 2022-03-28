const restaurants = [
  {
    "name": "La Patisserie",
    "takeout": false,
    "rating": 5
  },
  {
    "name": "Cafe Geneva",
    "takeout": true,
    "rating": 6
  },
  {
    "name": "NuCafe",
    "takeout": true,
    "rating": 8
  },
  {
    "name": "Bob's Seafood",
    "takeout": false,
    "rating": 2
  }  
];

document.getElementById("filterTakeoutBtn").addEventListener("click", filterTakeout);
document.getElementById("filterRatings").addEventListener("click", filterRatings);
document.getElementById("filterName").addEventListener("click", filterName);

function filterTakeout() {
  let rList = "\nThese restaurants offer takeout:\n";
  // The below line creates a new array with only the restaurants that offer takeout
  const hasTakeout = restaurants.filter(restaurant => restaurant.takeout);
  
  // The below line takes the restaurant names from the array and makes a string
  hasTakeout.forEach(restaurant => { 
    rList += `\n${restaurant.name}`;
  });
  
  // The below line updates the DOM with the newly created string
  document.getElementById("list").innerText = rList;
}

// Filter By Rating
function filterRatings() {
  let rList = "\nThese restaurants get rating:\n";
  const hasRating = restaurants.filter(restaurant => restaurant.rating >= 5);
  hasRating.forEach(restaurant => { 
    rList += `\n${restaurant.name}`;
  });
  
  document.getElementById("list").innerText = rList;
}
// Filter By Name
function filterName() {
  let rList = "\nThese restaurants get name:\n";
  const hasName = restaurants.filter(restaurant => restaurant.name.startsWith("C") );
  hasName.forEach(restaurant => { 
    rList += `\n${restaurant.name}`;
  });
  
  document.getElementById("list").innerText = rList;
}