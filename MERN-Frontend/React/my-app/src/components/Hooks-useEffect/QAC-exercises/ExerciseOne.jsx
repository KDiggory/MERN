import {useEffect, useState} from 'react';

const ExerciseOne = () => {

    const[text, setText] = useState(' ');
    const[click, setClick] = useState(false);

    useEffect(() => {
        setText(textFunction, 1000);
    },[click]);

    const textFunction = () => {
        console.log('Am i working?')
        const newText = 'Hello!!';
        setText(text + newText);
    }

    return ( 
        <div>
            <h2> QAC Exercise one</h2>
            <h3> I am the initial text </h3>
            <h3>{text}</h3>
            <button type='button' onClick={() => setClick(!click)}> Click me to read more </button>
        </div>
     );
}
 
export default ExerciseOne;