// in a jsx file if you type sfc it stands for 'stateless function component'
 
// Need to import the child component into the parent component
import Child from './Child';


const Parent = () => {
    return ( 
        // This parent will be rendering the child component
        // <h2> Placeholder for child component</h2>
        <Child></Child>
    );
};
 
export default Parent ;