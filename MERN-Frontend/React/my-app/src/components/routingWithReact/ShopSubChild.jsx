import { useParams } from "react-router-dom";

const ShopSubChild = () => {

    const{id} = useParams();
    return ( 
        <h3> Shop id: {id} </h3>
     );
}
 
export default ShopSubChild;