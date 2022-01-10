// hooks are used to configure your test environment
// organise, certain tests to run first
// setup test - setup the environment --> variables, global info
// tear down test - close environment down --> removing data from database - get things back to default state

const { isTypedArray } = require("util/types");
const { markAsUntransferable } = require("worker_threads");


describe('hooks', function() {

    let string; // this is a global variable - but without using var

    // Setup test

    before(function() {
        console.log('Run once before the first test in the describe')
        string = 'Test String';
    });
    it('Will print Hello world', function() {
        console.log('Hello world');
    });

    it('Will print Hello world a second time', function() {
        console.log('Hello world');
    });
    // Teardown test
    after(function(){
        console.log('Runs after the tests');
    });

    // beforeEach --> good for timestamping!
    beforeEach(function() {
        console.log('Will run before each test');
    });

    // afterEach --> good for timestamping!
    afterEach(function(){
        console.log('Will run after each test')
    });

    // Two other config things you can use
    // .only - Only this test from this suite will run
    // .skip - skip this test

    // it.only('only this test will run', function(){
    //     console.log('Only this test!');
    // });

    it.skip('this test will skip', function(){
        console.log('Skip this test!');
    });
    // this will show as pending 
    // .skip tests are useful for a large test suite and you know one test doesnt work - dont want the entire suite to fail just because one feature hasn't been implemented
 });
 
