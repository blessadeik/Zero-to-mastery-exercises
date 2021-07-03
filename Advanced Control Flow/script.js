// Condition ? expr1 : expr2;
// Ternary Operator


// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may Enter" : "Acess Denied";

// var automatedAnswer = "Your account # is" + (isUserValid(false) ? "1234" : "Not available");

// function condition(){
//     if (isUserValid(true)){
//         return "You may Enter"
//     }else{
//         return "Acess Denied"
//     }
// }

// var answer2 = condition();


// Switch statement
function moveCommand(direction){
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You Encountered a Monster";
            break;
        case "back":
            whatHappens = "You Arrived Home";
            break;
        case "right":
            whatHappens = "You Found a River";
            break;
        case "left":
            whatHappens = "You Ran into a Troll";
            break;
            default:
                whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}