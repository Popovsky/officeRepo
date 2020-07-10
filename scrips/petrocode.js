'use strict';

function validateUserValue(v) {
    if (typeof v !== 'number') {
        throw new TypeError('value must be a number');
    }
    if (v < 18 || v > 100 || isNaN(v) || !isFinite(v)){
        throw new RangeError('value must be between 18 and 100');
    }
    return v;
}