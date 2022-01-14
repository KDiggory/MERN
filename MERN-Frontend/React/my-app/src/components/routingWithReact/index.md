# Routing

React is generally a one page application
- React has one html page and can generate or load components as it needs

Want to be able to have components for other pages ( home, about, contact etc) and tell app.js to use this whole component

app.js --> some component (Parent) --> another component (Child)

app.js --> shop.jsx
       --> about.jsx
       --> contact.jsx

Traditional html routing
<nav bar> -> <a href='./html/shop.html'>/>

React html routing - requires some way to change what components are rendered in app.js
<div>
    <Shop>
    <Home>
</div>

use npm i react-router-dom to install