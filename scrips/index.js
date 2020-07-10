'use strict';

class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    get weight() {
        return this.density * this.volume;
    }
}

class Car {
    constructor(weight, fuel) {
        this.weight = weight;
        this.fuel = fuel;
    }

    get fullWeight() {
        return this.weight + this.fuel.weight;
    }
}

const VW = new Car(1400, new Fuel(100, 0.86));
console.log(VW.fullWeight);