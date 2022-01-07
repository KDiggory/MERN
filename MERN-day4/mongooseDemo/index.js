// Import packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

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








// listen on port 5015
const server = app.listen(5015, () => {
    console.log(`server started successfully on port ${server.address().port}`);
});