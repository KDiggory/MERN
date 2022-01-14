import {useEffect, useState} from 'react';
import ExerciseTwoName from './ExerciseTwoName';

const ExerciseTwo = () => {

    const [name, setName] = useState(' ');

   const changeName = (name) => {
        console.log('In the setName function'); 
        setName(name);
    }
    useEffect(() => {
        console.log('In the useEffect function');
        document.title = (`${name}'s page`);
    },[name]);


    return ( 
    <div>
        <h2> Exercise Two </h2>
        <ExerciseTwoName changeName={changeName} name={name}/>
    </div> );
}
 
export default ExerciseTwo;