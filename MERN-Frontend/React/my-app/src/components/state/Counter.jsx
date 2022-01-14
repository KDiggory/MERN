const Counter = ({setCount}) => {

    let start = false;
    if(!start) {
        setCount(4);
        start= true;
    }
    return (  
        <h2>Counter: </h2> 
    );
}
 
export default Counter;