//How does JavaScript work?

//Memory Heap and Call Stack support

// Memory Heap 
const a = 1;
const b = 4;
const c = 9;

//call stack 
console.log('3');
console.log('6');
console.log('9');



const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

