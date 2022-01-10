// This is the set up for route testing - importing everything etc
const {expect} = require ('chai');
const {assert} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
//import the bird model
const {Bird} = require('../bird.js');
//import the server
const server = require('../index.js');

chai.use(chaiHttp); 

// testing

describe('Route testing', function() {
    // pass in the word done to let chai know when then async code is done
    it('Should respond with "Test path successful"', function(done){
        // Arrange
        // Telling chai to use index.js
        chai.request(server)

        // Act
        // User server to get request with '/test'
        .get('/bird/test')
        // end is used for async, saying when you have ended
        // ie when you have some data/ returned something
        // either throw an error or give a response
        .end((err, res) => {
            if(err) {
                console.log('ERROR!!');
                done(err)
            };
        // Assert
        // whatever the request returns we test here
        expect(res).to.have.status(201);
        expect(res).to.not.be.null;
        expect(res).to.have.property('text', 'Test path successful');
        done(); // this tells mocha and chai that we are done with this test
        });
    });
});