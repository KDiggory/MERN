// file with original functions

const add = (a,b) => {
    let answerAdd = a+b;
    return answerAdd;
};

const minus = (a,b) => {
    let answerMinus = a-b;
    return answerMinus;
};

const multiply = (a,b) => {
    let answerMultiply = a*b;
    return answerMultiply;
};

const divide = (a,b) => {
    let answerDivide = a/b;
    return answerDivide;
};

const power = (a,b) => {
    let answerPower = a**b;
    return answerPower;
};

module.exports.addFunc = add;
module.exports.delFunc = minus;
module.exports.multiFunc = multiply;
module.exports.divFunc = divide;
module.exports.powerFunc = power;
