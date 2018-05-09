'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

//Even though x and y have same content, they are seen as different objects
console.log('The result of x==y will be: x is not equal y');
console.log(x == y ? 'x is equal y' : 'x is not equal y');

console.log('The result of x==y will be: x is not equal y');
console.log(x === y ? 'x is equal y' : 'x is not equal y');

//In this case z and y are referring to the same object
console.log('The result of z===y will be: z is equal y');
console.log(z === y ? 'z  is equal y' : 'z is not equal y');

console.log('The result of z===y will be: z is not equal x');
console.log(z === x ? 'z  is equal y' : 'z is not equal x');
