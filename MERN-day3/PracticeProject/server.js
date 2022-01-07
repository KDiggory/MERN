// Import packages
const express = require('express');
const cors = require('cors');

// Initialise app as the express function
const app = express();

// Common middleware
app.use(express.json());
app.use(cors()); // tells app to use cors to avoid cors issues

// custom middleware 1
app.use((req, res, next) => {
    console.log('first piece of middleware - birds can fly, mostly..'); // this just does a console log
    next();
});

// custom middleware 2
app.use((req, res, next) => {
    console.log('second piece of middleware - this post is about birds'); // this just does a console log
    next();
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



// Add the Birds route (as birdRoutes) into the server.js file
const birdRoutes = require('./routesFolder/birdRoutes.js');

// Add the BirdsofPrey route (as birdRoutes) into the server.js file
const birdOfPreyRoutes = require('./routesFolder/birdsOfPreyRoutes.js');

// tell server to use this route - where middleware becomes more apparent
app.use('/bird', birdRoutes);
app.use('/birdOfPrey', birdOfPreyRoutes);


// listen on port 5015
const server = app.listen(5015, () => {
    console.log(`server started successfully on port ${server.address().port}`);
});

// Export nested middleware to routes
// module.exports.time = time;
// module.exports.smile = smile;