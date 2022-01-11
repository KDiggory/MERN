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

    // Before function that will add at least one document 
    // so we can delete / get without having to add anything
    // adding an after function that clears all data - to use with a test database
    // let testID;
    // let testID2;

    // before(function(done){
    //     console.log('Setup of environment');
    //     // Generate a new bird object
    //     // this is a JSON object - does need quote marks
    //     const testBird2 = new Bird({
    //     'birdName': 'Bertie',
    //     'species': 'blue tit',
    //     'habitat': 'garden tree',
    //     'age': 12
    //     });

    //     const testBird3 = new Bird({
    //         'birdName': 'Franco',
    //         'species': 'falcon',
    //         'habitat': 'forest',
    //         'age': 7
    //         });
    //         testBird2.save().then((result) => {
    //             testID = result._id.toString(); // this saves the _id of the saved bird so you can use it for search and delete etc
    //         testBird3.save().then((result) => {
    //         testID2 = result._id.toString(); // this saves the _id of the saved bird so you can use it for search and delete etc
    //         done(); // this saves the test bird into the database
    //     });
    // });

    // // Adding an after function to clear ALL DATA
    // after(function(done){
    //     Bird.deleteMany({}).then(()=> {
    //         console.log('everything deleted!');
    //         done();
    //     });
    // });

    // a test bird that can be used throughout testing
    // this is a JS object - don't need quote marks
    const testBird = {
        birdName: 'Bertie',
        species: 'blue tit',
        habitat: 'garden tree',
        age: 12
    };

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
 

        it(`Should post data to the db return <name> added to aviary`, function(done){
            // Arrange
            
            // Telling chai to use index.js
            chai.request(server)
            // Act
            .post('/bird/create')
            .send(testBird)
            .end((err, res) => {
                if(err) {
                    console.log('ERROR!!');
                    done(err)
                };
            // Assert
            expect(err).to.be.null;
            expect(res).to.not.be.null;
            expect(res).to.have.property('status', 201);
            expect(res).to.have.property('text', `${testBird.birdName} added to aviary`);
            done();
        });
    });
 

        // POST
            it(`Should post data to the db return <name> added to aviary`, function(done){
            // Arrange
            
            // Telling chai to use index.js
            chai.request(server)
            // Act
            .post('/bird/create')
            .send(testBird)
            .end((err, res) => {
                if(err) {
                    console.log('ERROR!!');
                    done(err)
                };
            // Assert
            expect(err).to.be.null;
            expect(res).to.not.be.null;
            expect(res).to.have.property('status', 201);
            expect(res).to.have.property('text', `${testBird.birdName} added to aviary`);
            done();
        });
    });
 

        // GET
            it(`Should get all birds`, function(done){
                // Arrange
                
                // Telling chai to use index.js
                chai.request(server)
                // Act
                .get('/bird/readAll')
                .end((err, res) => {
                    if(err) {
                        console.log('ERROR!!');
                        done(err)
                    };
                // Assert
                const resBody = res.body;
                expect(err).to.be.null;
                expect(resBody).to.not.be.null;
                expect(res).to.have.property('status', 202);
                resBody.map((bird) => {
                    expect(bird).to.be.a('Object');
                    expect(bird).to.contain.keys('birdName');
                })
                });

                done();
        });
     

        // GET BY ID 
        it(`Should get bird with the id <id>`, function(done){
            // Arrange
    
            // Telling chai to use index.js
            chai.request(server)
            // Act
            .get('/bird/get/:id')
            .send(testBird._id)
            .end((err, res) => {
                if(err) {
                    console.log('ERROR!!');
                    done(err)
                };
            // Assert
            const resBodyID = res.body;
            expect(err).to.be.null;
            expect(resBodyID).to.not.be.null;
            expect(res).to.have.property('status', 200);
            done();
        });
    });

    it(`Should delete the bird with the id <id>`, function(done){
        // Arrange

        // Telling chai to use index.js
        chai.request(server)
        // Act
        .delete('/bird/delete/:id')
        .send(testBird._id)
        .end((err, res) => {
            if(err) {
                console.log('ERROR!!');
                done(err)
            };
        // Assert
        const resBodyID = res.body;
        expect(err).to.be.null;
        expect(resBodyID).to.not.be.null;
        expect(res).to.have.property('status', 200);
        done();
    });
});
 
        });

