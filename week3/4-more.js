'use strict';

function vehicleType(color, code) {

    let vehicle;
    if (code === 1) {
        vehicle = 'car';
    } else if (code === 2) {
        vehicle = 'motorbike';
    } else {
        return 'unknown vehicle';
    }
    return 'a ' + color + ' ' + vehicle;
}

console.log(vehicleType('white', 1));
console.log(vehicleType('black', 2));
console.log(vehicleType('red', 3));


