'use strict';

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString);

console.log(myString.length);

myString = myString.replace(/,/gi, ' ');

console.log(myString);
