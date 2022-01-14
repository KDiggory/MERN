import {useState} from 'react';

const MilesAhead = () => {
    const [steps, setSteps] = useState(0);
    const increment = () => {
        setSteps(prev => prev +1);
    }
    return ( 
        <div>
            <h2> Steps today: {steps} </h2>
            <button onClick={increment}> take step </button>
        </div>
     );
}
 
export default MilesAhead;