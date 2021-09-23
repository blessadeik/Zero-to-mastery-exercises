const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'

]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then (array => {
        console.log(array[0], '1');
        console.log(array[1], '2');
        console.log(array[2], '3');
        console.log(array[3], '4');
    }).catch(err=>console.log('oops', err))
    .finally(() =>console.log('We are done'));


    // for await of

    const getData = async function(){
        const arrayOfPromises = urls.map(url=> fetch(url));
        for await (request of arrayOfPromises) {
            const data = await request.json(); 
            console.log(data);
        }
    }