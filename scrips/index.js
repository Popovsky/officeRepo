'use strict';

class Worker {
    constructor(name, surname, age, rate = 0, days = 0) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.rate = rate;
        this.days = days;
    }

    isAdult() {
        return this.age > 17;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker('Ivan', 'Ivanov', 17, 100, 30);
console.log(worker1.getSalary());
console.log(worker1.isAdult());
