'use strict';

function advertisement(vehicleNames) {

    //Making strings in the array plural
    const pluralArrayElements = vehicleNames.map(vehicleNames => `${vehicleNames}s`);
    // Adding 'and' word instead of the last comma
    const replaceLastComma = pluralArrayElements.toString().replace(/,(?=[^,]+$)/, ' and ');
    //Replacing current commas.. adding new commas with space
    const arrayFinalVersion = replaceLastComma.toString().replace(/,/g, ', ');

    return 'Amazing Joe\'s Garage, we service ' + arrayFinalVersion + '.';
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];

console.log(advertisement(vehicles));
