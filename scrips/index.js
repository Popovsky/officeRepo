'use strict';

class Figure {
    constructor(name) {
        this._name = name;
    }
    getArea() {
        return null;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super('circle');
        this._radius = radius;
    }

    getArea() {
        return Math.PI * this._radius * this._radius;
    }
}

/**
 *
 * @param {Figure} figure
 */
function getFigureArea(figure) {
    if (figure instanceof Figure) {
        return figure.getArea();
    }
    throw new TypeError();
}
