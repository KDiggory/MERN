const Form = ({setUsername, setPassword}) => {
    return ( 
 
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(event) => {
                console.log(event.target);
                setUsername(event.target.value)}}></input>
                <br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(event) => {
                console.log(event.target);
                setPassword(event.target.value)}}></input>
                <br></br>
            <input type="submit" value="Submit" name="Submit" ></input> 
            {/* <button onClick={subBut} type="submit" value="Submit" name="Submit"></button> */}
        </form>
     );
}
 
export default Form;