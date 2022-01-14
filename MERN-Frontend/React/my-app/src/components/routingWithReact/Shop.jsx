import Content from "./Content";
import { useParams } from "react-router-dom";
import ShopSubChild from "./ShopSubChild";

const Shop = () => {
    const page = 'shop';
    const verb = 'shop like';
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ferrets.jpg/2560px-Ferrets.jpg'
    const imageAlt = 'A picture of two ferrets'

    
    return ( 
        <div>
        <label for="input">Input:</label>
        <input type="text" id="input" name="input" ></input>
        <button type='button'></button>
        <Content page={page} verb={verb} image={image} imageAlt={imageAlt}/>
        </div>
     );
}
 
export default Shop;

// maker variable to store query name - state?
// button that when click grab input field variable
// then sends you to subchild/input