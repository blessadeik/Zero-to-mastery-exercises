moveplayer(100, 'left')
.then(() => movePlayer(50, 'left'))
.then(() => movePlayer(20, 'right'))
.then(() => movePlayer(35, 'down'))



// ASYNC AWAIT

async function playStarts (){
    const firstMove = await movePlayer(100, 'left');
    const secondMove = await movePlayer(50, 'left');
    await movePlayer(20, 'right');
    await movePlayer(35, 'down');
}


// fetch: normal and async await

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log())

async function fetchData (){
    const resp = await fetch('https://jsonplaceholder.typicode.com');
    const data = await resp.json();
    console.log(data);
}
fetchData()


// 
const urls =[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'

]


Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log(array[0], 'users')
    console.log(array[1], 'posts')
    console.log(array[2], 'albums')
}).catch('oops')

// 
const getData = async function (){
    const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
        )) 
            console.log(users, 'users')
            console.log(posts, 'posts')
            console.log(albums, 'albums')
    }


    // or
    const getData = async function (){
        try{
        const [users, posts, albums] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
        )) 
            console.log(users, 'users')
            console.log(posts, 'posts')
            console.log(albums, 'albums')
        } catch(err){
            console.log('oops')
        }
    
    }