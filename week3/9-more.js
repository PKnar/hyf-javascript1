'use strict';

'use strict';
function advertisement(vehicleNames) {

    //Making strings in the array plural
    const pluralArrayElements = vehicles.map(vehicles => `${vehicles}s`);
    // Adding 'and' word instead of the last comma
    const replaceLastComma = pluralArrayElements.toString().replace(/,(?=[^,]+$)/, ' and ');
    //Replacing current commas.. adding new commas with space
    const arrayFinalVersion = replaceLastComma.toString().replace(/,/g, ', ');

    return 'Amazing Joe\'s Garage, we service ' + arrayFinalVersion + '.';
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
vehicles.push('truck');

console.log(advertisement(vehicles));
