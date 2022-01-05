'use strict';

// objects are unordered collections of related data in the form of key value pairs
// objects are data types and are mutable

let sherman = {
    name: 'Sherman',
    colour: 'Apricot',
    fluffy: true,
    age: 5
};

// this is an object created for sherman
// keys arent in quotes

console.log(sherman);
console.log(sherman.colour);
console.log(sherman.fluffy);


// objects can be manipulated after being created
sherman.good = 'sometimes';
console.log(sherman.good);

// can make an array of objects
let doghouse = [
    { name: 'Valentine', colour:'apricot'},
    { name: 'Sherman', colour:'apricot'},
    { name: 'Sherlock', colour:'brown'},
    { name: 'Watson', colour:'white'},

];

console.log(doghouse);

// can cycle through the array using a forEach loop
doghouse.forEach(dog => {
    console.log(dog);
    console.log('woof');
});

// for(dog of doghouse){        this isnt working, not sure why
//     console.log(dog.colour);
// };

for(let i =0; i < doghouse.length; i ++){
    console.log(doghouse[i]);
}

// Destructuring - extracting information from objects / arrays for ease of use
const film = {
    title: 'coco',
    genre: 'kids',
    runtime: 105
};

console.log(film.title);

console.log(`My favourite film is ${film.title}, it is a ${film.genre} film and lasts for ${film.runtime} minutes`);

// destructuring makes this simpler
// this is deconstructing the object so you can pass the values directly in
let {title, genre, runtime} = film;

console.log(`My favourite film is ${title}, it is a ${genre} film and lasts for ${runtime} minutes`);

