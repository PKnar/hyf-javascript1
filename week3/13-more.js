'use strict';

const bar = 42;
const result = typeof typeof 42;

/*The typeof 42 returns 'number', 
and typeof 'number' is a string,
so typeof typeof 42 will return 'string'*/

console.log(result);
