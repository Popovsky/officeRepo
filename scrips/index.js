'use strict';

class User {
    constructor(name, surname, age, email, isBanned = false) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._email = email;
        this._isBanned = isBanned;
    }

    set isBanned(v) {
        if (typeof v !== 'boolean') {
            throw new TypeError();
        }
        this._isBanned = v;
    }

    get email() {
        return this._email;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }

    get isAdult() {
        return this._age > 17;
    }
}

class Admin extends User {
    constructor(name, surname, age, email) {
        super(name, surname, age, email, false);
    }

    bad(user) {
        return user._isBanned = true;
    }

    unBan(user) {
        return user._isBanned = false;
    }
}
