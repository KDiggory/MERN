// This file will be concerned with the routes for the bird collection

// Importing in the router function of the express object
const router = require('express').Router();

// All of our routes go below and use router instead of app.

router.get('readAll', (req, res) => {
    res.status(202).send('read all accessed');
});

// Export our router for server.js to use
module.export = router; 
// slightly different to before

