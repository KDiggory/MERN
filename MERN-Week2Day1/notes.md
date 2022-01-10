# Testing

Unit testing - Tests independently of each other 
Integration testing - How functions work together

Testing is the task of running our projects and verifying the functions perform as expected

Whilst testing express there is only so much code we actually write ourselves! Yay
We only test the Routes ourselves
Server.js/index.js   - mainly config
model folder         - mainly mongoose config
routes folder        - what we're telling our app to do --> what we test

Generally unit testing our routes folder
1) Mocha - Testing framework for JS (Not Mockito!) - equiv JUNIT
2) Chai  - Testing assertion framework             - equiv JUNIT assertion code Assertions.assertEqual('true');
3) Istanbul - coverage framework

# Mocha
General testing tool
- Mocha excels at testing asynchronous code
    .then()
    .catch()
    async await
    CRUD apps (or apps that require in/out communication (talking to another service))

Mocha is installed with npm, but installed globally ( like nodemon)
- Don't need to install for each project
- Doesn't install for each project you build
- Mocha we run from the commandline - like nodemon. That is why it needs to be installed to home pc!

npm i mocha -g  --> to install

Within tests folder adding a file called 'intro.test.js'
JS test files should have a .test before the .js
(the JS by the file will be orange not yellow!)

# Chai
Chai is our assertion library/ framework for using mocha
Gives us assertion functions we can use that return true or false (passing or failing tests)

Install chai and chai-http using npm --> not done globally as using in scripts, not writing into the command line
BUT, would need to have the npm init done first! 

'npm init -y'

'npm i chai chai-http'

# Route testing

When testubg the routes of an express project we want to do 2 things:
- Simulate the path 
- Check what the response code is