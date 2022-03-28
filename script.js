// 1 - white rabbit
const rabbit = { 
  color: "white",
  checkWatch() {
    console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
  }
};
rabbit.checkWatch();

// 2 - spaceship
const spaceship = { 
  name: "Apolo",
  launch() {
    alert(`You have launched the spaceship ${this.name}!`)
  }
};
  spaceship.launch(); 

// 3 - shopping cart
const cart = {
  contents:[],
  addItem(item) {
    cart.contents.push(item);
  }
};

cart.addItem("laptop");
console.log("The cart contains:", cart.contents);

// 4 - lever
// your code here - uncomment the line below when done
const lever ={
  stamp: "ACME",
  pull() {
    console.log(`An anvil stamped ${this.stamp} drops on your head.`)
  }
}
lever.pull();

// 5 - Table
const dog ={
  name:"Popy",
  age: "four",
  color: "Black",
  woow(){
    console.log(`My dog ${this.name} is a ${this.color} color and he is ${this.age} years old.`)
  }
}
dog.woow()