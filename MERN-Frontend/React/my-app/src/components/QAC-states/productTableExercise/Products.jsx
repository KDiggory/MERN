import {useState} from 'react';

const Products = ({product}) => {
    const {prodId, prodName, prodCost} = product;
    return ( 
        <div> 
            <h2> Product ID: {prodId}</h2>
            <h2> Product name: {prodName}</h2>
            <h2> Product cost: {prodCost}</h2>
            
        </div>
     );
}
 
export default Products;