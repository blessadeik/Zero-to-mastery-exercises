// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let select = []
array.forEach(user => {
  let {username} = user ;
  username = username + "!";
  select.push(username);
})

console.log('ForEach',select);


//Create an array using map that has all the usernames with a "? to each of the usernames

mapArray = array.map(user => {
  let {username} = user;
  username = username + "?";
  mapArray.push(username);
})

console.log('Map', mapArray);


//Filter the array to only include users who are on team: red
filterArray = array.filter(user => {
  return user.team == "red";
})
console.log ('Filter', filterArray);


//Find out the total score of all users using reduce

reduceArray = array.reduce((acc, user) =>{
  return user.score + acc;
}, 0)
console.log ('Reduce', reduceArray);



// (1), what is the value of i?

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newArray = array.map (items =>{
  user.items= user.items.map(items =>{
    return items + "!";
  });
return user;
})
console.log ('MapNew', mapNewArray);
