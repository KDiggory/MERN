// This file will be concerned with the routes for the bird collection

// Importing in the router function of the express object
const router = require('express').Router();

// // import nested middleware from server.js file
// const time = require('../server.js');
// const smile = require('../server.js');

// All of our routes go below and use router instead of app.

// CRUD functionality
router.get('/readAll', (req, res) => {
    res.status(202).send('read all accessed');
});

router.get('/get/;id', (req, res) => {
    console.log(req.params.id);
    res.status(202).send(`read by id accessed: ${req.params.id} requested`);
});

router.post('/create', (req, res) => {
    res.status(201).send('create accessed');
});

router.put('/update/:id', (req, res) => {
    console.log(req.body); // update has 2 parts - the body you are adding and the params id
    console.log(req.params.id);
    res.status(200).send(`update accessed: ${req.params.id} requested`);
});
// can also do update the same way that delete is done below - using query parameters

// using query params for delete, that means you dont need to specify in path
// delete?name=katie --> this is more flexible than setting it as id only
router.delete('/delete', (req, res) => {
    console.log(req.query);
    res.status(204); // cant send text back when you use a 204
});
// other option
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