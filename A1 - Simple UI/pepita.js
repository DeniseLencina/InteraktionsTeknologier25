class Bird{
    constructor(){  /* this is a function */
        this.energy = 0;  /* this are the properties */
    }
   /* eat(gramsOfSeeds){
        this.energy = this.energy + gramsOfSeeds * 4;
    }
    fly(kmFlying) {
        this.energy = this.energy - (10 + kmFlying *2);
    } 
    Seconde example with no repetition of this. (dot operator)
    */ 
    eat(gramsOfSeeds){
        this.energy += gramsOfSeeds * 4; // add to the current value
    }
    fly(kmFlying) {
        this.energy -= (10 + kmFlying *2); // rest to the current value
    }
}

// Creating Pepita object
let pepita = new Bird(); // Bird calls the Constructor function
console.log("Pepita's starting energi is " + pepita.energy);
pepita.eat(100)
console.log("The energi of Pepita after eating 100 is " + pepita.energy)

function eat() {
    pepita.eat(10); // Eat 10 grams
    document.getElementById('energy').textContent = pepita.energy;
}

function fly() {
    pepita.fly(1); // Fly 1 kilometer
    document.getElementById('energy').textContent = pepita.energy;
}
