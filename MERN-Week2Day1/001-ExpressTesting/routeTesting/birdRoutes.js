// This file will be concerned with the routes for the bird collection

// Importing in the router function of the express object
const router = require('express').Router();

router.get('/test', (req, res) => {
    res.status(201).send('Test path successful')
});

const bird = require('../../../MERN-day4/mongooseDemo/persistence/models/bird.js');
// Import in the model
const {Bird} = require('./bird.js');
// need to deconstruct and import as itself


// All of our routes go below and use router instead of app.

// CRUD functionality
//Create
router.post('/create', (req, res, next) => {
    console.log(req.body); 
    // pass the req body into the schema and generate a new bird object
    const bird = new Bird(req.body); 
    bird.save().then((result) =>{
    console.log('==================================================================');
    console.log(result);
        res.status(201).send(`${result.birdName} added to aviary`)
    })
    
    .catch((error) => {
        if (bird.birdName = 'undefined') {
        //create an error object for us to handle
        const errorMessage = new Error(`There is a problem here! You need to give your bird a name!`);
        // pass our error to error handling middleware
        next(errorMessage);
        }
        else if (bird.age <= 0) {
            console.log('does this fire?');
        const errorMessage = new Error(`Your bird is still an egg`);
        // pass our error to error handling middleware
        next(errorMessage);
         }
         else {
            const errorMessage = new Error(`Looks fine! Why are you in the error message??`);
            next(errorMessage);
         }
    }) 
});

// Get All birds - just asking it to send everything back
router.get('/readAll', (req, res) => {
    // need to pass in error first in order to access the actual data
    Bird.find((error, birds) => {
        res.status(202).send(`accessed get all: ${birds}`);
        })
});

router.get('/get/:id', (req, res) => {
    console.log(req.params.id);
    Bird.findById(req.params.id, (error, bird)=> {
        res.status(200).send(`here is the bird you requested: ${bird}`)
    })
});



router.put('/update/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    console.log(body); // update has 2 parts - the body you are adding and the params id
    console.log(id);
    Bird.findByIdAndUpdate(id, body, (error) => {
        res.status(200).send(`${req.body.birdName} updated`);
    }) 
});
// can also do update the same way that delete is done below - using query parameters

// using query params for delete, that means you dont need to specify in path
// delete?name=katie --> this is more flexible than setting it as id only
// router.delete('/delete', (req, res) => {
//     console.log(req.query);
//     res.status(204); // cant send text back when you use a 204
// });
// other option
router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    Bird.findByIdAndDelete(req.params.id, (error) => {
        res.status(200).send(`bird deleted: ID:${req.params.id}`)
    })
    
});

// Export our router for server.js to use
module.exports = router; 
// slightly different to before