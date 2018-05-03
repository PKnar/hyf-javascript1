'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

//Even though x and y have same content, they are seen as different objects
console.log('The reuslt of x==y will be: x is not equal y');
console.log(x == y ? 'x is equal y' : 'x is not equal y');

console.log('The reuslt of x==y will be: x is not equal y');
console.log(x === y ? 'x is equal y' : 'x is not equal y');

//In this case z and y are refering to the same object
console.log('The reuslt of z===y will be: z is equal y');
console.log(z === y ? 'z  is equal y' : 'z is not equal y');

console.log('The reuslt of z===y will be: z is not equal x');
console.log(z === x ? 'z  is equal y' : 'z is not equal x');
