'use strict';

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);

/*Changes in o2 affects o3, because  o2 and o3 are referring to the same object,
even though o1 and o2 have the same content, they are considered to be different objects,
so if o3=o2, it does not mean that o3=o1, this is why changes in o1 do not affect o3 */
