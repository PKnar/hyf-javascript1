'use strict';
let x = 264;
console.log('The value of my variable x is:264', x);
let course = 'Web development';
console.log('The value of my variable course is:Web development', course);
let languages = ['HTML', 'CSS', 'Javascript'];
console.log('The value of my variable languages is:HTML,CSS,Javascript', languages);
let learningJavascript = true;
console.log('The value of my variable learningJavascript is:true', learningJavascript);
let y = 857;
console.log('The value of my variable y is:857', y);
let currentSeason = 'Spring';
console.log('The value of my variable currentSeason is:Spring', currentSeason);
console.log('Variables x and y are numeric variables.', 'Variables course and currentSeason are strings.', 'Variable languages is an array.', 'Variable learningJavascript is a boolean.')
console.log(typeof x);
console.log(typeof course);
console.log(typeof languages);
console.log(typeof learningJavascript);
console.log(typeof y);
console.log(typeof currentSeason);
if (typeof x !== typeof languages) {
    console.log('Not same type');
}
if (typeof x !== typeof y) {
    console.log('Not same type');
}
if (typeof course !== typeof languages) {
    console.log('Not same type');
}
if (typeof course !== typeof currentSeason) {
    console.log('Not same type');
}
if (typeof x !== typeof learningJavascript) {
    console.log('Not same type');
}