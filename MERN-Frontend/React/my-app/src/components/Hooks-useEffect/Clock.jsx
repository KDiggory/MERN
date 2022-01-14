import {useEffect, useState} from 'react';

const Clock = () => {
    // Use State to store and set the current time
    // this sets the initial value of state to the current time 
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [start, setStart] = useState(false);
    // Use useEffect to console.log and run a function in 1 second
    // first parameter to pass in is arrow function - what to do on re render
    useEffect(()=>{
        setTimeout(tick, 1000);
        // Passing in time as a variable [], whenever time changes do the useEffect
    },[start]);
    // function to set the current time
    const tick =() => {
        // function needs to set state to the current time
        // when tick runs it will set the time to the current time
        setTime(new Date().toLocaleTimeString());
    }


    return ( 
        <div>
            <h3> Clock! </h3>
            <h4> Time is: {time}</h4>
            <button type='button' onClick={() => setStart(!start)}> Click me </button>
        </div>
     );
}
 
export default Clock;