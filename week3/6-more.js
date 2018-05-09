'use strict';

function vehicleType(color, code, age) {

    let vehicle;
    if (code === 1) {
        vehicle = 'car';
    } else if (code === 2) {
        vehicle = 'motorbike';
    } else {
        return 'unknown vehicle';
    }

    const vehicleCondition = age <= 1 ? 'new' : 'used';

    return 'a ' + color + ' ' + vehicleCondition + ' ' + vehicle;
}

console.log(vehicleType('white', 1, 1));
console.log(vehicleType('black', 2, 3));
console.log(vehicleType('red', 3, 6));


