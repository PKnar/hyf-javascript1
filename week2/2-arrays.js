'use strict';

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

//Adding new item at specific index
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The new value of array will be:['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
console.log(favoriteAnimals);

//Length of the array
console.log('The array has a length of: ' + favoriteAnimals.length);

//Deleting item at specific index
favoriteAnimals.splice(3, 1);

console.log(favoriteAnimals);

//Finding the index of item and removing it
const index = favoriteAnimals.indexOf('meerkat');

console.log('The item you are looking for is at index: ' + index);

if (index !== -1) {
    favoriteAnimals.splice(1, 1);
}

console.log(favoriteAnimals);
