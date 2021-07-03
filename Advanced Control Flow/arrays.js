var array =[1, 4, 5, 6];

const double = [];
const newArray = array.forEach((num) => {
   double.push(num * 2);
})

console.log('forEach', double);


// map, filter, reduce,
// map

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter
const filterArray = array.filter(num => num > 3);
console.log('filter', filterArray);

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);