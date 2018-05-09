'use strict';

function printObject(object) {
    for (const prop in object) {
        console.log(prop + '=' + object[prop]);
    }
}

const country = {
    countryName: 'The Netherlands',
    theCapital: 'Amsterdam',
    officialLanguage: 'Dutch',
};

printObject(country);
