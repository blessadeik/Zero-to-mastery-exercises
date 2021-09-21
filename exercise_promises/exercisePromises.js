// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) =>{
  setTimeout(() => resolve, 4000, 'success')
})

// #2) Run the above promise and make it console.log "success"

promise.then(console.log("Success"))


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

promise.reject('failed').catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]


promise.all([urls]).then(values => {console.log(values);})
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swap.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

promise.all(urls.map(url => 
  fetch(url).then(people => people.json())
))
.then(array => {
  console.log('1', array[0]),
  console.log('2', array[1]),
  console.log('3', array[2]),
  console.log('4', array[3])
})
.catch(err => console.error('Resolve this ASAP', err))
