// flat()

const array1 = [1,2,3,4,5]
array1.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()

const array3 = [1,2,[3,4,[5]]]
array3.flat()

const jurassicPark = [['🐐','🐄'], '🐔','🦚', '🐫',['🐍', '🦂'], [[[['🐱‍🐉']]], '🦕'], ['🐙','🦀']]
jurassicPark.flat(4)

const entries = ['bob', 'sally',,,,,'cindy']
entries.flat()

// flatMap()
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🐰')


// trimStart(), trimEnd()
const userEmail = '               baobabtree@gmail.com'
const userEmail2 = 'johny@gmail.com     '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// fromEntries()
userProfiles = [['commanderTom', 23], ['derekZlander',  40], ['hansel', 18]]
Object.fromEntries(userProfiles)

// try-catch block 
//a
try{
    true + 'Hi'
}catch{
    console.log('you messed up man')
}

//b
try{
    bob + 'Hi'
}catch (error){
    console.log('Really??🙄' + error)
}