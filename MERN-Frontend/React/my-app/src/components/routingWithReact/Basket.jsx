import Content from "./Content";

const Basket = () => {
    const page = 'basket';
    const verb = 'provincial';
    const image = 'https://img.joomcdn.net/111b523ead0ecd76fd53dd5b31c3e20ed9585fc5_1024_1024.jpeg'
    const imageAlt = 'A picture a basket'

    return ( 
        <div>
        <h3> Basket </h3>
        <Content page={page} verb={verb} image={image} imageAlt={imageAlt}/>
        </div>
     );
}
 
export default Basket;