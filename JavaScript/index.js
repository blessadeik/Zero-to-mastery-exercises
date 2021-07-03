// if else if statement


// let names="Billy";

// if (names === "Billy"){
    
    //     alert("Hi Billy");
    // }else{
        //     alert("Sorry, I dont know you mate..");
        // };
        
        
        // if else if statement
        
        // if (names === "Billy"){
            
            //     alert("Hi Billy");
            
            // }else if (names === "Susan"){
                //     alert("Hi Susy");
                // }else{
                    //     alert("Sorry, I dont know you mate..");
                    // };
                    
                    
                    // variable naming and using the && operator
                    
                    // var firstName = "Bob";
                    // var lastName = "Smith";
                    
                    // if (firstName === "Bob" && lastName === "Smith"){
                        //     alert("Hey Bob Smith, Welcome here.");
                // };
// Object
// var user ={
//     name: "John",
//     age: 26,
//     hobby:"Baseball",
//     isMarried:false,
//     kids: ["Mandy", "Jess", "Salmon"],
//     shout: function(){
//         console.log("Haaaaaaa!");
//     }

//     // a function inside an object is a method. 
// };

// // Array
// var list = [
//     {
//         username:"Peter",
//         password:"Numbness3"
//     },
//     {
//         username:"Don",
//         password:"Unik1"

//     }
// ];

// Facebook exercise
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// 
// ...
var database = [
    {   
        username:"Sophy",
        password:"undaunted1"
    },
    {   
        username:"Nathy",
        password:"Promises"
    },
    {   
        username:"Micheal",
        password:"Faithfu11"
    }
];

var newsFeed = [
    {
        username:"Sophy",
        timeline:"The world is such a beautiful place"
    },
    {
        username:"Jeremy",
        timeline:"Never knew I had to fight for what's mine!!!"
    },
    {
        username:"Symphony",
        timeline:"My Mum is the best person ever met"
    }
];

function isUserValid(user, pass){
    for(var i=0; i< database.length; i++){
        if (database[i].username === user && database[i].password === pass){
            return true
        }
    }
    return false
}


function signIn(user, pass) {
    // ...
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username or password");
    }
    // ...
    // if (user === database[0].username && 
    //     pass === database[0].password){
    //         console.log(newsFeed);
    //     }else{
    //         alert("Sorry, this is a wrong username and password");
    //     }
}

var userNamePrompt = prompt ("What\'s your username?");
var passwordPrompt = prompt ("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

// ...
// function newFunction(){

// }

// var newFunction = function(){

// }

// Looping
// ...
// var todoist =[
//     "clean room",
//     "exercise",
//     "study javascript",
//     "eat",
//     "have a bath"
// ];
// var todosImportant =[
//     "clean room",
//     "exercise",
//     "stydy javascript",
//     "eat",
//     "have a bath"
// ];
// ...
// for (var i = 0; i < todoist.length; i++){
//     console.log(todoist[i] + "!");
// }

// var todoistLenth = todoist.length;

// var todoistLength = todoist.length;
// ...
// for (var i = 0; i < todoistLength; i++){
//     console.log(todoist[i]);
// }

// todoist.forEach(function(todo){
//     console.log(todo, i);
// })
// ...
// function logTodoist(todo, i){
//     console.log(todo,i);
// }

// todoist.forEach(logTodoist);
// todosImportant.forEach(logTodoist);

// ...
// Counter
// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

