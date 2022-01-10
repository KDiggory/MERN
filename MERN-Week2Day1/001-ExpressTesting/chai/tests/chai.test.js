// Import in chai
const {expect} = require('chai');
const {assert} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Using chai, use the chaiHttp module (rather than a different framework)
chai.use(chaiHttp);

// When testing we follow a framework
// Arrange
// Act
// Assert

// describe('Basic testing process', function() {
//     it('Should return 2 when 1+1', function() {
        
//     // Arrange - declaring variables
//         let num1 = 1;
//         let num2 = 1;
//         let sum;

//     // Act - What am i testing
//     sum = num1 + num2;

//     // Assert - uses expect from chai
//     expect(sum).to.equal(2);
//     });
//     it('the string should be "Red"', function() {
//         // Arrange - declare
//         let testString;
//         // Act - do the thing
//         testString = 'Red';
//         // Assert
//         expect(testString).to.equal('Red');
//         expect(testString).to.be.a('string');
//     });

// });

describe('testingExercises', function() {
    it('Should return 20 when 5 x 4', function(){
        //Arrange
        let num;
        //Act
        num = 5 * 4;
        //Assert
        expect(num).to.equal(20);
    } );
    it('Should print "Hello Katie"', function() {
        // Arrange
        let inputName;
        // Act
        inputName = 'Katie';
        console.log(`Hello ${inputName}`)
        // Assert
        expect(inputName).to.equal('Katie');
    });
    it('Should return the value of 1+2+3+4', function() {
        // Arrange
        let sum;
        // Act
        sum = 1+2+3+4;
        // Assert
        expect(sum).to.equal(1+2+3+4);
        assert.isNumber(sum);
    });
    it('The text "Hello" should be a string', function() {
        // Arrange
        let hello;
        // Act
        hello = 'hello';
        // Assert
        expect(hello).to.equal('hello');
        assert.isString(hello);
    });
    it('The number 12 should not be undefined', function() {
        // Arrange
        let twelve;
        // Act
        twelve = 12;
        // Assert
        expect(twelve).to.equal(12);
        assert.isDefined(twelve);
        expect(twelve).to.be.not.undefined; 
        
    });
    it('An object should have a property of name', function() {
        // Arrange
        let theObject;
        // Act
        theObject = {
            objectName: 'My Object',
            use: 'testing'
        };
        // Assert
        assert.isDefined(theObject.objectName);
        expect(theObject).to.contain.keys('objectName');

    });
    it('a text should be null', function() {
        // Arrange
        let theText;
        // Act
        theText = null;
        // Assert
        assert.isNull(theText);
        expect(theText).to.be.null;
    });
    it('5 should be odd', function() {
        // Arrange
        let five;
        let odd;
        let isOdd
        // Act
        five = 5;
        odd = five % 2;
        //another way
        if(five % 2 == 0) {
            isOdd = false;
        } else {
            isOdd = true;
        }
        // Assert
        assert.isNumber(five);
        expect(five).to.be.gt(1);
    // the other way
        expect(isOdd).to.be.equal(true);
    });
    it('"Hello Reece" should contain the word Reece', function() {
        // Arrange
        let Reece;
        let helloReece;
        // Act
        Reece = 'Reece';
        helloReece = 'Hello Reece';
        // Assert
        expect(helloReece).to.contain(Reece);
    });
    it('An array of fruits should contain an apple', function() {
        // Arrange
        let fruits;
        let apple;
        // Act
        fruits = ['apple', 'orange', 'banana'];
        apple = 'apple';
        // Assert
        expect(fruits).to.contain(apple); // this is the better one to use
        expect(fruits).to.include(apple); // this only searches in the keys
    });

})
