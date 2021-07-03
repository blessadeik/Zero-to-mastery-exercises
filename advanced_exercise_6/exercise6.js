//Evaluate these:
//#1
[2] === [2] //true
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //5
const object3 = object2; //5
const object4 = { a: 5};//5 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    cow(name,type,color){
        console.log('cow', this);
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
        cow(name,type,color){
            super(name,type,color);
                console.log('animal', this);
            
        }
        sound(){
                console.log(`I am a cow and my name is ${this.name}. I am a ${this.type} and my color is ${this.color}`);
            }
}

const animal = new Mamal ('Sherly', 'Mamal', 'Brown');