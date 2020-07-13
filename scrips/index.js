'use strict';

class Squirrel {
    constructor(name) {
        this._name = name;
    }

    eat() {
        return `Squirrel ${this._name} is eating`;
    }

    climbTree() {
        return `Squirrel ${this._name} is climbing`;
    }
}

class FlyingSquirrel extends Squirrel {
    constructor(name, maxRange) {
        super(name);
        this._maxRange = maxRange;
    }

    fly() {
        return `Squirrel ${this._name} is flying on ${this._maxRange} metres`;
    }
}
