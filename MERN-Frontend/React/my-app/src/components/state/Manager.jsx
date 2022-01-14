// Manager - will hold state and return the components
// Counter is going to have an int value it can update
// Displat is going to show the current int value

import {useState} from 'react';
import Counter from './Counter';
import Display from './Display';

const Manager = () => {

    // Set up our state
    // const [variable name, set<variable name>] = useState(<dstarting value>)
    // count is getCount and setCount lets us set the value -- getters and setters
    const [count, setCount] = useState(2);

    console.log(count); 


    return ( 
        <div>
            <h2> Managers number: {count} </h2>
            <Counter setCount={setCount}/>
            <Display count={count}/>
        </div>
    );
}
 
export default Manager;