'use strict';
let multipleTypes = [3, 'string'];
if (multipleTypes[0] !== multipleTypes[1]) {
  console.log('Yes you can store multiple types in an array.')
} else {
  console.log('You can not store multiple types in an array.');
}


let x = 6 / 0;
let y = 10 / 0;
if (x === y) {
  console.log('Infinities can be compared.');
} else {
  console.log('Infinities can not be compared.');
}

