// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// context:tells you where we are within the object. it most often gets confused with scope.
const object4 ={
    a: function(){
        console.log(this);
    }
}

// instantiation:this is when you make the copy of an object and reuse the code
class Player{
    constructor(name,type){
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// Whenever you extend a class, you would want to use super so you can have access to the constructors
class Wizard extends Player{
    constructor (name, type){
        super(name, type);
        console.log('wizard', this);

    }
    play(){
        console.log(`WEEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');