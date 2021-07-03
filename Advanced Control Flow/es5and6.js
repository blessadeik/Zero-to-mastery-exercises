//ES5 and ES6

//1

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90){
//     let wizardLevel = true;
//     console.log('inside', wizardLevel);
// }

// console.log('outside', wizardLevel);

//2

// const obj ={
//     player:'bobby',
//     experience:100,
//     wizardLevel:false;
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

//3
//Template strings

// const name = "Sally";
// const age = 34;
// const pet = "horse";


// instead of this,
// const greeting = "Hello" + name + "you seem to be doing" + greeting + "!";

// do this
// const greetingBest = `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have`;


// default aruments

// function greet (name='', age=30, pet='cat'){
//     return `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have`;
// }


// let sym1 = Symbol ();
// let sym2 = Symbol ('foo');
// let sym3 = Symbol ('foo');

// function add (){
//     return a + b;
// }

// const add2 = (a,b) => a + b;


// Advanced functions
const first = () =>{
    const greet = 'Hi';
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();


// Closures
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

   