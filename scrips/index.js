'use strict';

const userNumber = Number(prompt('Please input your number'));

try {
    const validatedUserNumber = validateUserValue(userNumber);
    alert('Good job');
} catch (e) {
    if (e instanceof RangeError) {
        alert('value must be between 18 and 100');
    } else if (e instanceof TypeError) {
        alert('value must be a number');
    }
    throw e;
}
