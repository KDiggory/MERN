// Is my hello world component
// What this function returns is what will be rendered on our web page

const HelloWorld = () => {
    return (
    [<h3> Hello World!! </h3> ,   // Put Html directly into our JS
    <h4> This is a second line</h4>,
    <p> And this is a paragraph, you can add multiple lines by returning them as an array!</p>
     ] )};

    
// Exporting the component for use
export default HelloWorld