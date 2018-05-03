'use strict';

function vehicleType(color, code) {

    if (code === 1) {
        code = 'car';
    } else if (code === 2) {
        code = 'motorbike';
    } else {
        return 'unknown vehicle';
    }
    return 'a ' + color + ' ' + code;
}

console.log(vehicleType('white', 1));
console.log(vehicleType('black', 2));
console.log(vehicleType('red', 3));


