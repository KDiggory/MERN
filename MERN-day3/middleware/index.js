'use strict';

const express = require('express');
const app = express();
app.use(express.json()); // this is an example of common middleware

//CORS - prevents unwanted CORS errors - pretty common
const cors = require('cors'); 

//Middleware
//Middleware does something thenc alls next()
//next() invokes the subsequent middleware (with next passed in)
//whenever a request is made ALL middleware is fired


//middleware shouldn't have a path! app.use((req, res, next)

// custom middleware
// app.use((req, res, next) => {
//     let now = new Date();
//     let timeStamp = now.getTime();
//     console.log('first piece of middleware'); // this just does a console log
//     console.log(`${now}`); // the output is different if you console log (`${now}`) or (now)
//     console.log(`time stamp: ${timeStamp}`);
//     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//     next();
// });


// setting this as nested middleware..
const firstTime = (req, res, next) => {
    let now = new Date();
    let timeStamp = now.getTime();
    console.log('first piece of middleware'); // this just does a console log
    console.log(`${now}`); // the output is different if you console log (`${now}`) or (now)
    console.log(`time stamp: ${timeStamp}`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    next();
};
const secondTime = (req, res, next) => {
    let now2 = new Date();
    let timeStamp = now2.getTime();
    console.log('second piece of middleware');
    console.log(`This is how fast it is! ${now2} - no change in time!`);
    console.log(`maybe a change in time stamp? ${timeStamp}? Yes!`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    next();
};


app.get('/time', firstTime, secondTime, (req, res) => {
    res.send('nested middleware fired - time');
});

// app.use((req, res, next) => {
//     let now2 = new Date();
//     let timeStamp = now2.getTime();
//     console.log('second piece of middleware');
//     console.log(`This is how fast it is! ${now2} - no change in time!`);
//     console.log(`maybe a change in time stamp? ${timeStamp}? Yes!`);
//     console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//     next();
// });

app.use ((req, res, next) => {
    console.log('third piece of middleware');
    let number = (Math.random() *100);
    console.log(`Your random number between 1 and 100 is: ${number}`);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    next();
});

// this is the request
app.get('/', (req, res) => {
    res.send('site accessed!');
});

// Nested middleware
// make it as a function variable first - middlewares are arrow functions saved as variables
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

// request with nested middleware
app.get('/nested', logger, (req, res) => {
    res.send('nested middleware fired');
});


// Nested middleware exercise
// create a middleware that prints out the word nested and make a request that uses that middleware
// make as a function
const exerciseLogger = (req, res, next) => {
    console.log('nested!');
    next();
};

// request with nested middleware
app.get('/exercise', exerciseLogger, (req, res) => {
    res.send('exercise on nested middleware complete!');
});


// always need this listen method at the bottom
// starting the server on port 5015
const server = app.listen(5015,() => {
    console.log(`Server started on port ${server.address().port}`);
    console.log('Hello');
});