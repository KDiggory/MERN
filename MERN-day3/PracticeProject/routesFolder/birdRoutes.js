// This file will be concerned with the routes for the bird collection

// Importing in the router function of the express object
const router = require('express').Router();

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
const smile = (req, res, next) => {
    console.log(':) smile!!');
    next();
};

router.get('/nested', time, smile, (req, res) => {
    res.send('nested middleware fired - birds');
    console.log('second piece of middleware - this post is about regular birds');
});

// Export our router for server.js to use
module.exports = router; 
// slightly different to before