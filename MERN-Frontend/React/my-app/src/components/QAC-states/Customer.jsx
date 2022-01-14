import Form from './Form';
import {useState} from 'react';

const Customer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const subBut = () => {
        setUsername(prev => prev + username);
        setPassword(prev => prev + password);
    }

    return ( 
        <div>
            <h2> Customer Login </h2>
            <Form setUsername={setUsername} setPassword={setPassword}/>
            <h3>Your username is: {username}</h3>
            <h3>Your password is: {password}</h3>
        </div>
     );
}
 
export default Customer;