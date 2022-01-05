// file where the numbers are added and sums calculated
const {addFunc, delFunc, multiFunc, divFunc, powerFunc} = require('./calculator1.js')

let num1 = 5;
let num2 = 7;

const finalNumAdd = addFunc(num1, num2);
const finalNumDel = delFunc(num1, num2);
const finalNumMulti = multiFunc(num1, num2);
const finalNumDiv = divFunc(num1, num2);
const finalNumPower = powerFunc(num1, num2);

module.exports.addAnswer = finalNumAdd;
module.exports.delAnswer = finalNumDel;
module.exports.multiAnswer = finalNumMulti;
module.exports.divAnswer = finalNumDiv;
module.exports.powerAnswer = finalNumPower;
module.exports.number1 = num1;
module.exports.number2 = num2;
