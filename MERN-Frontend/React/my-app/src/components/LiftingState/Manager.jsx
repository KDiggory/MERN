import Product from './Product';
import Basket from './Basket';
import {useState} from 'react';

const Manager = () => {

    // State for productName + qty
    const [productName, setProductName] = useState("");
    const [qty, setQty] = useState(0);

    // State for basket
    const [basket, setBasket] = useState([]);

    // Function called addToBasket takes in data (prod name and qty)
    const addToBasket = (data) => {

        // Sets the state to be equal to what you pass in
        setBasket((basket) => {

            // Rather than replacing what is already in the array, it puts it at the end
            // return an array = [...(ignore all of the first stuff), newData]
            // ... in array means ignore all of the first ["a",...,"d"]
            return [...basket, data]
        });
    };

    return ( 
        <div>
            <h3> Manager</h3>
            <Product setProductName={setProductName} setQty={setQty} addToBasket={addToBasket} productName={productName} qty={qty}/>
            <Basket basket={basket}/>
        </div>

     );
}
 
export default Manager;