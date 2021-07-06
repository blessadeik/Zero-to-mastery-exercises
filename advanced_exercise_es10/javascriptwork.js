//How does JavaScript work?

//Memory Heap and Call Stack support

// Memory Heap 
const a = 1;
const b = 4;
const c = 9;

//Call Stack 
console.log('3');
console.log('6');
console.log('9');



const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

one();


 //Recursion
function foo(){
    foo()
}

foo()

//synchronous js example
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP
element.addEventListener('click', () =>{
    console.log('click');
})