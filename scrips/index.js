'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get isAdult(){
        return this.age > 17;
    }

    static isAdult(user) {
        return user.isAdult;
    }

    static isUser(obj) {
        return obj instanceof User;
    }
}

const user1 = new User('Test', 17);
console.log(User.isAdult(user1));
console.log(User.isAdult(user1));
