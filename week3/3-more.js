'use strict';

function printObject(object) {
    console.log('Country name = ' + object.countryName);
    console.log('The capital = ' + object.theCapital);
    console.log('Official language = ' + object.officialLanguage);
}

const country = {
    countryName: 'The Netherlands',
    theCapital: 'Amsterdam',
    officialLanguage: 'Dutch',
};

printObject(country);
