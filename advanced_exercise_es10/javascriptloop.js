// JavaScript Looping
// for, while, do, forEach(new in ECMAScript 5)


//1
const basket = ['apple', 'orange', 'grape'];
const detailedBasket = {
    apple:5,
    orange:10,
    grape:1000
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating - arrays, strings
// does not work with objects
for(item of basket) {
    console.log(item);
}
// for in - properties
//enumerating:this is for objects
// This works with objects. loops over inummerable 
for (item in detailedBasket) {
    console.log (item)
}