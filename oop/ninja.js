class Ninja{
    constructor(nameInput, healthInput) {

        this.name = nameInput;
        this.health = healthInput;
        this.speed = 3; // default ninja speed attribute
        this.strength = 3; // default ninja strength attribute
    }
    sayName(){
        let name = `Hi my name is ${this.name}`;
        console.log(name);
    }
    showStats() {
        let stats = `name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`;
        console.log(stats);
    }
    drinkSake() {
        this.health += 10;
        return this;// adding 10 levels of health to the ninja
    }

}

//name: bruce lee, health: 100, speed: 3





let ninja1 = new Ninja('Bruce Lee', 100);
ninja1.sayName();

ninja1.showStats()
