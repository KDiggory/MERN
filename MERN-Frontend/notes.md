# React

What is react?
A front end JS library for *reactive UI*
 - Interactive -- responds to users inputs
 - Page size - changes to match monitor/ display
 - Data loads reactively separate to the page - so it can change ==> youtube.com is reactive - videos change as you scroll down and then go back. 

 There is a react server app that contains a collection of our JS files
 ReactApp
 - uses JSX - javaScript enhanced
 - CSS
 - Resources

 --> No HTML files, JavaScript runs the show!!

 When creating reactApp we create components rather than HTML pages

 # React app
 public folder 
  - contains react stuff, images 

scr folder
 - where all of code goes!

 - make a folder in this called components - this is where components will go
        - components must all begin with a capital letter
 - make  folder called css - where css files go
 - make a folder called _tests - where tests go

 # Hierachy

 React works with a parent child relationship
    it doesn't work top to bottom so you use a hierachy

The top level is the page --> app.js
Each component is then a child of that

# Props

Props are pieces of data that are passed from a parent component to a child component
Data within reactis uni directional ( flows in one way, from top to bottom)
Data goes from the top to the bottom, not the other way round.

If data is needed by a file in 2 parent child sections then it needs to be stored in a common progenitor - so it can go to both.

Props are a means to pass data from parent to child ( just like a parameter)

        app.js
          |
          V
       PizzaOrder
          |
          V
        