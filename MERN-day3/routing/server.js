
// Import packages
const express = require('express');
const cors = require('cors');

// Initialise app as the express function
const app = express();

// Common middleware
app.use(express.json());

// Add the Birds route (as birdRoutes) into the server.js file
const birdRoutes = require('./routes/BirdRoutes.js');

// tell server to use this route - where middleware becomes more apparent
app.use('bird', birdRoutes);
// this says if any request begins with /bird then use the birdRoutes route file

// listen on port 5015
const server = app.listen(5015, () => {
    console.log(`server started successfully on port ${server.address().port}`);
});