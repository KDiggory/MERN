import Products from './Products';

import {useState} from 'react';
// create an input field - search term
// create a loop that renders products with that search term
const ProductTable = () => {
    const [query, setQuery] = useState('');

    const prodList = [
        {
            prodId: '1234',
            prodName: 'Bike',
            prodCost: 150
        },
        {
            prodId: '5567',
            prodName: 'Notebook',
            prodCost: 4
        },
        {
            prodId: '2319',
            prodName: 'Whisky',
            prodCost: 56
        },
        {
            prodId: '4563',
            prodName: 'Houseplant',
            prodCost: 15
        },
        {
            prodId: '5693',
            prodName: 'Wall art',
            prodCost: 120
        },
        {
            prodId: '1475',
            prodName: 'Wheelbarrow',
            prodCost: 59
        },
    ]

    return (  
        <div>
            <h2> Search Table</h2>
            <input type='text' name='product' onChange={(event) => setQuery(event.target.value)}/>            
        {/* Map over the array of products only rendering them if they match the query */}
        {console.log(query)}
        {prodList.map((product, i) => {
            if(product.prodName === query) {
                return <Products product={product}/>
            } else if (product.prodId === query) {
                return <Products product={product}/>
            } else if (product.prodCost == query) {
                return <Products product={product}/>
            } else {
            return 'not found';
            }
        })}


        </div>
    );
}
 
export default ProductTable;