'use strict';

console.log('The promise page'); // do something to check the file has been found by the html page

// call backs - a function that takes in another function as a parameter.
// need
        // 1 -  a function to be called back
        // 2 - a function that does the callback
        // 3 - a function that invokes the function 2nd function


// 1 - this is the function to be called back 
const message =(text) => `Hello /${text}`; 

// 2 - this is the function that does the callback
// callbackFunc - is the function that is being passed in
//name will be the text we pass in at invoke
// currently the 2 functions aren't connected at all!
const processMessage = (callbackFunc, name) => {
    console.log('Message not sent yet');
    callbackFunc(name)
};

// 3- Invoking processMEssage
processMessage(message, 'Katie');

//Promises - are placeholders for some data that will be available immediately, after some time or never
// promises are used because JS is single threaded, when sending a request out the app waits until it recieves (or fails) before moving on
// allows JS to be asynchronous - aspects firing off when ready or not at all without having to wait for it all

// Promises come in 3 states
    // pending - not fufilled or rejected yet
    // fufilled - the action relating to the promise is successful
    // rejected - the action relating to the promise has failed

// main purpose of promises is getting data from the backend

const promisesPromises = new Promise ((resolve, reject) => {
    let a = 1 + 1;
    if(a==2){
        // what happens in a success
        resolve('successful :)'); // invoke the resolve function
    } else {
        // what happens in a rejection
        reject('failed :(');
    }
});

// .then() - whatever the previous function returns pass it in and say what to do next
// .catch() - triggered when the previous function is rejected, fails etc

// message will either be 'successful :)' or 'failed :('
promisesPromises.then((message) => {
    console.log(`This is the .then block, status is ${message}`);
}) 
// it wont show the unsuccessful message as that was a failure, so need a .catch statement too
.catch((message) =>{
    console.log(`This is the .catch block, status is ${message}`);
}).then(() => {
    console.log('This will run regardless');
});

