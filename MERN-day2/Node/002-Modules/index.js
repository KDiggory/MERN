// this is the file that needs to import the exported files. 
const {greetingString, greetingFunc} = require('./greeting.js');
// this is saying deconstruct the greeting.js module and import the greetingString and greetingFunct

console.log(greetingString);
greetingFunc();
