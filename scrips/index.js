'use strict';

class Worker {
    constructor(name, surname, rate = 0, days = 0) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    set rate(value) {
        if (typeof value !== 'number') {
            throw new TypeError('param rate must be a number');
        }
        if (value < 0) {
            throw new RangeError('rate must be a positive number');
        }
        this._rate = value;
    }

    get rate() {
        return this._rate;
    }

    set days(value) {
        if (typeof value !== 'number') {
            throw new TypeError('param days must be a number');
        }
        if (value < 0 || !Number.isInteger(value) || value > 31) {
            throw new RangeError('days must be a positive integer number');
        }
        this._days = value;
    }

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Ivan', 'Ivanov', 100, 30);
