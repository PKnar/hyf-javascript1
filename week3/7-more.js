'use strict';

function vehicleType(color, code, age) {

    const vehicles = ['car', 'motorbike', 'caravan', 'bike'];

    const vehicleCondition = age <= 1 ? 'new' : 'used';

    if (code < 1 || code > vehicles.length) {
        return 'unknown vehicle';
    }

    return 'a ' + color + ' ' + vehicleCondition + ' ' + vehicles[code - 1];
}

console.log(vehicleType('white', 1, 1));
console.log(vehicleType('blue', 2, 1));
console.log(vehicleType('black', 3, 3));
console.log(vehicleType('blue', 4, 1));
console.log(vehicleType('red', 5, 6));


