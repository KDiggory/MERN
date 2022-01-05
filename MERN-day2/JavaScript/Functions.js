'use strict';

// alert ('Annoying pop up!');

// let can be changed
let num = 123;

// const is constant
const string = 'Katie';

// dont use var! Can be accessed globally without initialising
var forbiddenKnowledge = 'Messes up scope';

// make a basic functoni - snippets of code that JS can run

function add (x,y) {
    return x + y;
};

console.log(add(5,10));

// function expressions - functions that are stored as variables
const sub = function (x,y) {
    return x-y;
};

console.log(sub);

// Arrow functions - shorthand method of writing functions to improve readability

let hello = function (name) {
    return `Hello ${name}`
};

// remove the word function
// added an arrow after the bracket
hello = (name) => {
    return `Hello ${name}`
};

// can go even further - but only if it is a single line function
hello = (name) => `Hello ${name}`;

// if youre passing in a parameter, you can remove the () before the arrow 
// this is still fine but it seems messy - it is less clear that it is a function. Personal preference
hello = name => `Hello ${name}`;


console.log(hello('Katie'));


// 



