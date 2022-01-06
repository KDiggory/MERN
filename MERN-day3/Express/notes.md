# Express 
is a minimalist framework to handle web functionality in a node.js app Limited functionality BUT very compatible with custom and extra middleware

Middleware - Helps communication between two layers, two apps Middleware for client <-> server between two different parts of our backend

Express gives us a HTTP REQUEST API we can customise, including GET POST PUT DELETE

Install Express

Create a new NPM Project - npm init (Make faster by using npm init -y use default values for everything)
Install express - npm i express / npm install express
Install nodemon - npm i -g nodemon
Exercise - Create a project for the database you were working on yesterday

Create an index.js that listens to a specific port
Access the port number on your browser
Make the server console.log out "hello world" when it starts up

Make sure your javascript file matches what you called the main when initialising your npm init

#Request Handling
Request handling is specifying what you want the app to do when it receives requests from the front end.
- The path '/get/Book'
- The Method: GET
- The Body:

GET - read request
POST- create request
PUT - update request (takes in an ID and replaces the entire document)
PATCH - update request (only updates what has been modified) - harder to do with Java because doesn't work as well with mySQL. Works better with MongoDB
DELETE - delete request

Body - Is the data that is sent from the client to the server (data to put in a database)

Add a basic get request to our server that will return some data

# Response
Responses are what the server sends to the client
Without specifying a response the client is hanging and waiting for some data

There are 2 parts to this
res.send() - this is what you are passing back to the client - a number/object/text
res.status() - the HTTP status of the response

# Middleware
middleware is used to aid communication between two `nodes` client and server

Middleware in express is a function with REQ, RES and NEXT

If a function has next as a callback, when it is complete it will find the subsequent function with the word next. It works in a similar way to a .then. 

custom middleware - something you write yourself
common middleware - imported from npm/ express --> normally does a simple admin job 

# Nested Middleware
All regular middleware is fired from top to bottom with EVERY REQUEST
Middleware is not a request - it is just triggered when a request is sent

Nested middleware looks different ot regular, and you specify in what requests it should run.

Pass in nested middleware as a callback into a request

app.get('/test', (req, res, nested_middleware) => {

})

# Routing
HTTP Requests (app.get('/stuff')) - routes
So far, all of our routes have been written in our main file server.js

Aviary:
- Hedgerow
    '/getAll'
- SycamoreTree
    '/getAll'

Some routes in the project will overlap!

Routes Folder
    - hedgerowRoutes
    - SycamoreTreeRoutes

EXPRESS IS NOT OBJECT ORIENTED PROGRAMMING (ish)
- Hedgerow Domain, Controller Service etc  -- NO

Route file -> Service + controller merged into one