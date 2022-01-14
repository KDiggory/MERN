// Parent pass props to child
// Child passes props to subchild
// Child renders data
import Child from './Child';

const Parent = () => {

    const arrayYarn = ['merino', ' Jacobs', ' Yak', 'Blue faced leicester', 'silk']
    return ( 
        <Child array={arrayYarn}/>
     );
}
 
export default Parent;
