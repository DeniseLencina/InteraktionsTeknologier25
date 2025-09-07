class Bird{
    constructor(){  /* this is a function */
        this.energy = 0  /* this are the properties */
    }
    eat(gramsOfSeeds){
        this.energy = this.energy + gramsOfSeeds * 4
    }
    fly(kilometersToFly) {
        this.energy = this.energy - (10 + kilometersToFly *2)
    }
}