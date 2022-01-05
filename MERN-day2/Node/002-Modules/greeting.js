// creating a variable to export

const greeting = 'Hello, World!';

// create a function to export
const printGreeting = () => {
    console.log('Hello, World! I have been exported, woo!');
};

// export the variable and function as module objects
// module.exports<name_exported_variable> = <name_of_variable>
module.exports.greetingString = greeting;
module.exports.greetingFunc = printGreeting;

// these are now exported, just need to tell other file to use them!



