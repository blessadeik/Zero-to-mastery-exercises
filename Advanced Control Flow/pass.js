// Pass by Value vs Pass by Reference
//Primitive values

var a = 5;
var b = a;

b++;

console.log(a); //5
console.log(b); //6


//Object 1
// let obj1 = {name: 'Jude', password:'299'};
// let obj2 = obj1;

// obj2.password = 'easypeasy'

// console.log(obj1)
// console.log(obj2)

// Object 2
let obj ={a:'a', b:'b', c:{deep:'try and follow me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'Not sure I wanna do that';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

