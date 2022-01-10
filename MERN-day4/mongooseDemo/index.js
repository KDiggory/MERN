// Import packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const birdRoutes = require('./routes/birdRoutes.js');

// Initialise app as the express function
const app = express();

// Common middleware
app.use(express.json());
app.use(cors);

// database connection - is normally in a different file, but in here for simplicity
// Uses a URI - link to a service through the internal network
// connect to MongoDB with - mongoose.connect(uri, options)
//mongoose.connect('mongodb://localhost:27017/<dbName>') - this is the address for mongodb by default
mongoose.connect('mongodb://localhost:27017/aviary', {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log('Error, cant connect to database');
    } else if (!error) {
        console.log('connected to database :D');
    }
});

// use routes
app.use('/bird', birdRoutes)

// Creating the bird model
// model is an inbuilt function in mongoose, it takes in the name and uses what you pass in as model plans
const Bird = model('Bird', birdSchema);

// Export the model
module.exports = {'Bird': Bird};
// again different to other exporting
// 'Bird': Bird is an object and we are saying export it



// listen on port 5015
const server = app.listen(5015, () => {
    console.log(`server started successfully on port ${server.address().port}`);
});