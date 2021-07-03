// ES2020!
// BigInt  
// Nullish Coalescing Operator??
// Optional Chainning Operator?
// Promise.allSettled
// globalThis


// BigInt
typeof bigint
// Max number you can do in JavaScript could be checked using Number.MAX_SAFE_INTEGER
//to get a number with type of bigint, you can add n behind the number. e.g
typeof 3n  //bigint

// Optional Chaining Operator ?
// codes written below without the Optional Chaining Operator

let will_pokemon = {
    pikachu:{
        species:'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let weight = will_pokemon.pikachu.weight
console.log(`weight:`,weight)


let person = {
    binta:{
        age : 20,
        hobby : 'Swimming',
        height : 6,
        weight : 135,
        occupation : 'Teaching',
        power: 'ligthning'
    }
}

let occupation = person.binta.occupation
console.log(`Occupation:`,occupation)

// The chaining above is too much code 

if (person.binta && person.binta.hobby){
    let hobby2 = person.binta.hobby
    console.log(hobby2)
}else{
    let hobby2 = undefined
    console.log(hobby2)
}

// hence the use of Optional Chaining Operator as seen below
// instead you can do
let hobby3 = person?.binta?.hobby  //This checks for properties with the question mark instead of having long if statements
console.log(hobby3)


// Nullish Coalescing Operator ??
let power = person?.binta?.power || 'no power'
console.log(power)