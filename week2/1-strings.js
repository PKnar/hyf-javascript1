'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

let i = 0;
for (i; i < myString.length; i++) {
    myString = myString.replace(",", " ");
}
console.log(myString);
