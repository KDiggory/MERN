// this bird file will be creating a bird object
// specifying what params it should take in (colour, species etc)
//and it exports it for our route to use

// schema is more about managing the data you receive rather than limiting the data you receive


// import in mongoose
const mongoose = require('mongoose');

//deconstruct mongoose
const {Schema, model} = mongoose;

// schema for faveFood array
// a simple schema that you can only pass strings into
// basically an embedded documentbut with only one type
const foodSchema = new Schema({
    nameOfFood: String, 
    typeOfFood: String });

// create the schema
const birdSchema = new Schema({
   // key value pair = name of attribute : data type
    birdName: {
        type: String,
        required: true,      // this means it is required
        min: 1,              // minimum length
        max: 20              // maximum length
    },
    species: String,
    age: {
        type: Number,
        required: true
    },
    isCarnivore: Boolean,
    // An array of embedded documents
    faveFood: [foodSchema],
    // A single embedded document
    habitat: {
        habitatName: {
            type: String,
            required: true,
            min: 3 
        },
        capacity: Number
    },
    //Array of Strings
    eggNumbers: [Number]
});

// creating bird model

const Bird = mongoose.model('Bird', birdSchema);

// export the model
module.exports = {'Bird': Bird};

