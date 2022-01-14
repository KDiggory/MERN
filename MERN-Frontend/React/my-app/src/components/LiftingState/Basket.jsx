const Basket = ({basket}) => {
    return ( 
        <div>
        <h3> Basket </h3>
        {basket.map((product) => {
            console.log(basket);
           return <h2> Product: {product.productName} quantity: {product.quantity}</h2>
        })}
        </div>
        
     );
}
 
export default Basket;