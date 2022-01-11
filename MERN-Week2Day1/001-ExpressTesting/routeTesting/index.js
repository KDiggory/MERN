// Import packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const birdRoutes = require('./birdRoutes.js');

// Initialise app as the express function
const app = express();

// Common middleware
app.use(express.json());
app.use(cors());

// Error handling
app.use((errorMessage, req, res, next) => {
    console.log(errorMessage.stack);
    res.status(500).send(errorMessage.message); 
});

// PROD URI
 let dbURI = 'aviary';

// test URI
// let dbURI = 'testAviary';

// then put one of these variables into the localhost address below

// database connection - is normally in a different file, but in here for simplicity
// Uses a URI - link to a service through the internal network
// connect to MongoDB with - mongoose.connect(uri, options)
//mongoose.connect('mongodb://localhost:27017/<dbName>') - this is the address for mongodb by default
mongoose.connect(`mongodb://localhost:27017/${dbURI}`, {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log('Error, cant connect to database');
    } else if (!error) {
        console.log('connected to database :D');
    }
});

// use routes
app.use('/bird', birdRoutes)

// Add error handling middleware - Adding in errorMessage
// when a route says next(errorMessage) it will find the next middleware with (errorMessage) as a parameter


app.get('/', (req, res) => {
    console.log('connected');
    res.send('this has worked');
});



// listen on port 5015
const server = app.listen(5322, () => {
    console.log(`server started successfully on port ${server.address().port}`);
});

module.exports = server;