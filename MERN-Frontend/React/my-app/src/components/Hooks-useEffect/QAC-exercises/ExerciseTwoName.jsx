

const ExerciseTwoName = ({changeName, name}) => {

    let tempName;
    const saveName = () => {
        // when run save name function 
        console.log('in save name');
        changeName(tempName);
        console.log(tempName); // this is coming back as undefined..
    }

    return ( 
        <div>
           <label for='Inputname'>Name: </label>
            <input type='text' id='Inputname' name='Inputname' onChange={(e) => {
                tempName = e.target.value;
                console.log(tempName);
                console.log(e.target.value);
                }}></input>
            <button type='button' onClick={saveName}> Click me to change name </button>
            <h3> Hello there {name}</h3>
        </div>
     );
}
 
export default ExerciseTwoName;