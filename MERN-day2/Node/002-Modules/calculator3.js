// file where the answers are printed out
const {addAnswer, delAnswer, multiAnswer, divAnswer, powerAnswer, number1, number2} = require('./calculator2.js')

const printAnswer = () => {
    console.log(`The result of the addition of ${number1} and ${number2} is ${addAnswer} `);
    console.log(`The result of minusing ${number1} from ${number2} is ${delAnswer} `);
    console.log(`The result of the multiplication of ${number1} and ${number2} is ${multiAnswer} `);
    console.log(`The result of the division of ${number1} by ${number2} is ${divAnswer} `);
    console.log(`The result of ${number1} to the power of ${number2} is ${powerAnswer} `);
}

printAnswer();