class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
   poison() {
            console.log(`The ${this.color} ${this.element} ${this.type} blood and fangs are very poison to human.`);
 }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.color} ${this.type} howls loudly.`);
    }
}

class Lizard extends Monster {
    constructor(type, color, size) {
       super(type, color);
      this.size = size;
    }
    howl() {
        console.log(`The ${this.size}  ${this.color} ${this.type} bites is not fatal to humans.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar()
woodDragon.fly()
woodDragon.poison()

const werewolf1 = new Werewolf("werewolf", "golden");
werewolf1.howl();

const lizard= new Lizard("lizard", "grey", "large");
lizard.howl();