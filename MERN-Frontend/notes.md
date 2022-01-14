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
        Pizza

# React States

State is data that can change 
By change it can be affected by user input, new data coming in, local JS data

Static data - data we've passed to our components as props

How to tell our components this data can change?? - State --> This is a type of data that is passed as a prop
    -   State is a type of data we can pass to our components
    -   We can store this data as 'state'
    -   Rather than passing data we pass a function, similar to getters and setters in spring!

Rules for using state:
    -   State should be stored in the lowest common component
    -   If need be, redesign your hierarchy to have a sensible location of state
    -   You can create components for the sole purpose of storing state

# Rendering

Taking the data from the virtual DOM and displaying it on the webpage.
The point that all components and variables are instantiated.

When does this occur?
  - When the server/app starts
  - When state changes setCount(5) --> Infinite loop 
  - When new data is passed as props to components

Writing set<variable> directly in code - it causes an infinite loop because it renders, sees the set and renders again.

This rendering is a part of react - automatically happens

# UseEffect()

A function that runs after EVERY RENDER
  - Can update the DOM or component with new data
  - Ensuring components are loading properly
  -  Resetting or defaulting variables
  - GArbage collection

  -  Can pass in a second parameter which will be state useEffect
