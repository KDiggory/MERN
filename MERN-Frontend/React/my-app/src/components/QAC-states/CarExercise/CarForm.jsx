const CarForm = ({setBrand, setModel, setColour, setYear}) => {
    // let tempCarBrand;
    // let tempCarModel;
    // let tempCarColour;
    // let tempCarYear;
   
    return ( 
        <div>
            <form>
            <label for="brand">Make:</label>
            <input type="text" id="brand" name="brand" onChange={(event) => {
                console.log(event.target);
                setBrand(event.target.value)}}></input>
                <br></br>
            <label for="model">Model:</label>
            <input type="text" id="model" name="model" onChange={(event) => {
                console.log(event.target);
                setModel(event.target.value)}}></input>
                <br></br>
            <label for="colour">Colour:</label>
            <input type="text" id="colour" name="colour" onChange={(event) => {
                console.log(event.target);
                setColour(event.target.value)}}></input>
                <br></br>
            <label for="year">Year:</label>
            <input type="text" id="year" name="year" onChange={(event) => {
                console.log(event.target);
                setYear(event.target.value)}}></input>
                <br></br>
            
            </form>


        </div>
     );
}
 
export default CarForm;