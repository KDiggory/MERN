// This file will be concerned with the routes for the bird collection

// Importing in the router function of the express object
const router = require('express').Router();

// import nested middleware from server.js file -- instead make a separate middleware file
// const time = require('../server.js');
// const smile = require('../server.js');

// All of our routes go below and use router instead of app.

// CRUD functionality
router.get('/readAll', (req, res) => {
    res.status(202).send('read all accessed');
});

router.put('/create', (req, res) => {
    res.status(201).send('create accessed');
});

router.post('/update/:id', (req, res) => {
    res.status(200).send('update accessed');
});

router.delete('/delete/:id', (req, res) => {
    res.status(202).send('delete accessed');
});

//nested middleware 1
const time = (req, res, next) => {
    let date = new Date();
    console.log(`The date today is ${date}`);
    next();
};

//nested middleware 2
const eagle = (req, res, next) => {
    console.log('EAGLE!!!');
    next();
};

router.get('/nested', time, eagle, (req, res) => {
    res.send('nested middleware fired - birds of prey');
    console.log('second piece of middleware - this post is about birds of prey');
});

// Export our router for server.js to use
module.exports = router; 
// slightly different to before