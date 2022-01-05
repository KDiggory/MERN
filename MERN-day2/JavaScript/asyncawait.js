'use strict';

// Promises are used to create asynchronous code
// promises tend to be callbacks within callbacks within callbacks.... 

const promiseBased = () => {
    return Promise.resolve('Hello all!');
};

promiseBased().then((message)=> { // the .then section would be where you would make changes, however when its really short like this you probably wouldnt need to! 
    console.log(message);         // good for really big callbacks!
});

// when creating async code you MUST use the keyword async before the ()
const asyncBased = async () => {
    return Promise.resolve('Hello from Async');
};

// when the code is complete, whatever it returns print out
asyncBased().then(console.log());

// use a timeout to wait for a period of time before resolving
const asyncTimeout = async () => {
    console.log('timer starting');
    let newProm = new Promise((res, rej) => {
        // this is saying - with the new promise when 3000 ms has passed, run the resolve callback function - passing in 'timer has finished!'
        setTimeout(() => {
            res('timer has finished!');
        }, 5000);
    })
    // this is saying - result is equal to what newProm returns
    // when the code first runs newProm wont be anything, thats why you use the await keyword. It waits until the promise is resolved and then saves the variable
let result = await newProm;
console.log(result); // this will be printed after 5000ms once the variable result has been set as timer has finished, after the timeout has completed
};

asyncTimeout();

