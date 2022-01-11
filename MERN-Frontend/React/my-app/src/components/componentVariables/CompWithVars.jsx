// Component with variables 

const CompWithVars = () => {
    const katie = {
        name: 'Katie',
        age: 34,
        faveFood: 'Lasagne'
    }
    
    return(
        // when in return(), if you surround something with {} it is regular JS
        <div>
            <h2> Everything in the return will be rendered (if linked to app.js)</h2>
            <h3> Surrounding something with &#123; &#125; will make it seen as JS not text </h3>
            <h3> My name is {katie.name}, I am {katie.age} years old and my favourite food is {katie.faveFood}</h3>
        </div>    )
};
// Anything outside of the return() is just regular JS
export default CompWithVars;