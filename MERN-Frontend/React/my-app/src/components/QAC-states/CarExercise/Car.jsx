import {useState} from 'react';
import CarForm from './CarForm';

const Car = () => {
    const [brand, setBrand] = useState('Landrover');
    const [model, setModel] = useState('Discovery');
    const [colour, setColour] = useState('Grey');
    const [year, setYear] = useState('2016');
    
    return ( 
        <div> 
        <CarForm setBrand={setBrand} setModel={setModel} setColour={setColour}
        setYear={setYear}/>
        <h2>Here is your car:</h2>
        <h3> Make: {brand} </h3>
        <h3> Model: {model} </h3>
        <h3> Colour: {colour} </h3>
        <h3> Year: {year} </h3>
        </div>
     );
}
 
export default Car;