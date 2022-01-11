import Pizza from './Pizza';


const PizzaOrder = () => {
    return (
        // How and i going to pass the data I want to my child component? - like attributes for html elements
        <div>
        
        <Pizza name = 'Katie' size='10' flavour='meat feast'></Pizza>
        <Pizza name = 'George' size='12' flavour='bbq'></Pizza>
        </div>
     );
}
 
export default PizzaOrder ;