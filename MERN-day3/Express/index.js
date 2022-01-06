'use strict';

// import express package as a variable called express
const express = require('express'); // dont need curly braces as you arent deconstructing, its a single thing

// Making a variable called app that is equal to express
const app = express(); // because express itself is a function, so app is now equal to that function - makes code easier to use

// this is needed so the ap can use JSON data - middleware3
app.use(express.json());

// This is where the requests go, before the listening function but after making the app

// A basic get request to return a console log
// app.METHOD('path', what RequestDoes() (as an arrow function))
app.get('/hello', () => {
    return console.log('site accessed!');
});
// so when we do a /hello in our app (on the web browser) it will print site accessed to the console

app.delete('/delete', () => {
    console.log('Deleted item!');
})

app.post('/post', () => {
    return console.log('item posted');
});

app.put('/put', () => {
    return console.log('item put!');
});

// Requests

// URL params ID number, package name (Nodemon)
// within the path if something has a colon before it, that is the url param
app.get('/get/:name', (req) => {
    // console.log(req); // this is a huge amount, but is just an object that can be accessed
    console.log(req.params); // break it down to get the parameter
    console.log(req.params.name); // this just prints the parameter
})
// Query Parmas - ?species=finch

app.get('/getSpecies', (req) => {
    console.log(req.query);
    console.log(req.query.species);
})
// anything after the question mark is the query
//http://localhost:5015/getSpecies?species=finch

// Request body - Form data
app.post('/newBird', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('hello');
})


/// EXERCISES 
// Create 4 basic crud and print each to the console
// delete take in an id and print (URL param)
app.delete('/deleteBird/:id', (req,res) => { // dont need the res, but if you want to put item deleted in postman so you know its worked you do
    res.send('bird deleted');
    console.log(req.params.id);
    return console.log('bird deleted')
})
//read takes in URL query and print
app.get('/getSpecies/:species', (req, res) => {
    console.log(req.query);
    res.send(req.query.species);
    console.log(req.query.species);
    return console.log('species found');
})
//create - take in a body and print it (using postman)
app.post('/createBird', (req,res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
    return console.log('bird created');
});

// update - take in an id and body and print them out
app.put('/updateBird', (req,res) => {
    const body = req.body;
    console.log(body);
    res.send(body);
    return console.log('bird updated');
});

// Response to data
app.get('/helloThere/:name', (req,res) => {
    const name = req.params.name;
    res.send(`Hey ${name}, this is from the backend!`) // this prints on the webpage
})

// The app listening function should be at the bottom
//Making a new variable called server, it is equal to app listening on port 5015
const server = app.listen(5015,() => {
    console.log(`Server started on port ${server.address().port}`);
    console.log('Hello');
});

// //Making a second server
// const server2 = app.listen(5016,() => {
//     console.log(`Server started on port ${server2.address().port}`);
//     console.log('Hello again');
// });

// //Making a third server
// const server3 = app.listen(5017,() => {
//     console.log(`Server started on port ${server3.address().port}`);
//     console.log('Hello again again');
// });

