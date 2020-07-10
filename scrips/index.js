'use strict';

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.density * this.volume;
    }
}

class Car {
    constructor(weight, fuel) {
        this.weight = weight;
        this.fuel = fuel;
    }

    getFullWeight() {
        return this.weight + this.fuel.getWeight();
    }
}

const VW = new Car(1400, new Fuel(100, 0.86));
console.log(VW.getFullWeight());