// Mocha tests are designated with the following:
// describe() - test suite, groups of tests together 
// it() - an individual test

const { isTypedArray } = require("util/types")

// describe('message of what the group is', 'what you're testing());
describe('My first group of tests', function() { // With Mocha DONT USE arrow functions - just regular functions!!
    // is('Message of the test', 'what you're testing);
    it('Should print the word hello', function() {
        console.log('Hello');
    });
    it('Should pring the word Fabulous', function() {
        console.log('Fabulous')
    })
    it('Will print the number 5', function() {
        console.log(5);
    })
});

describe('My second group of tests', function() { // With Mocha DONT USE arrow functions - just regular functions!!
    // is('Message of the test', 'what you're testing);
    it('Should print the word marvelous', function() {
        console.log('marvelous');
    });
    it('Should print the word sweet pea', function() {
        console.log('sweet pea')
    })
});

// To run Mocha tests 
// 'mocha <name of test folder>
// mocha mocha-tests -- Run this from the folder above the test folder
