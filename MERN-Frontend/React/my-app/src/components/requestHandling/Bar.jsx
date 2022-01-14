import { useEffect, useState } from "react";
import axios from 'axios';
import Beer from "./Beer";
import Button from 'react-bootstrap/Button';

const Bar = () => {

    // Our state is going to be the data we pull from the api
    const [beerData, setBeerData] = useState([]);

    // State to check if the API has errored
    const [error, setError] = useState(null);

    // State to check if the data has loaded
    const [loaded, setLoaded] = useState(false);

    let tempId;

    // exercise - Using a public API of choice
    // use axios to pull the data down and be able to console.log it out 

    // useEffect to pull the data
    // Passing in a function to pull our data
    // Passing in [] runs once when the page loads and no more

    // const getData = () => {

    //     axios.get(`https://api.punkapi.com/v2/beers`)
    //     .then((response) => {
    //         setLoaded(true);

    //         // What does the data look like when pulling it
    //         setBeerData(response.data)
    //         console.log("===========================");
    //         console.log(beerData);
    //         console.log(response.data);
    //     }).catch((error) => {
    //         setLoaded(true);
    //         setError(error);
    //     }).then(() => { 
    //         // Doesnt show useful data, but the data is there! 
    //         console.log(beerData);
    //     });

    // };

    useEffect(() => {
        // Adding a timeout to show off HTML
        // this timeout IS NOT NECESSARY FOR IT TO WORK. JUST TO SHOW THE HTML CODE WORKING
        // Using timeout, passing my getData function as a callback, and waiting 3 sec to run 
            axios.get(`https://api.punkapi.com/v2/beers`)
            .then((response) => {
            // What does the data look like when pulling it
            setBeerData(response.data)
            console.log("===========================");
            console.log(beerData);
            console.log(response.data);
            setLoaded(true);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        }).then(() => { 
            // Doesnt show useful data, but the data is there! 
            console.log(beerData);
        });
    },[]);

    const getBeerId = (id) => {

        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        .then((response) => {
            setBeerData(response.data);
            setLoaded(true);
        }).catch((error) => {
            setLoaded(true);
            setError(error);
        });

        // axios.post(`https://api.punkapi.com/v2/beers/`, {
        //     name: "beer 1",
        //     description : "beeeeeeer"
        // }).then((response) => {
        //     console.log(response);
        // });

    };

    // if(error) {
    //     return<p> OOps, something is wrong.. </p>
    // } else if (!loaded) {
    //     return<p> Please wait, info loading! </p>
    // } else {
    //     return <p> {beerData[2].name} </p>
    // }

    if(error == true) {
        return <h2> Oops, theres been an error :o please refresh the page </h2>
    } else if(!loaded ) { // Loaded is not true / false
        return <h2> Please wait, data is loading! </h2>
    } else {
        return (
            <div>
                <h2> Loads if the data is fine! </h2>

                <input type="number" name="beerId" onChange={(event) => tempId = (event.target.value)}/>
                <button type="button" onClick={() => {getBeerId(tempId)}}>Get Beer By Id </button>
                <Button variant='primary' size='lg' onClick={() => {getBeerId(tempId)}}>Get Beer By Id</Button>

                {/* Iterating over our array, printing off a h4 for each beer in the array */}
                {/* Order of paramaters matters, otherwise you end up debugging for half an hour on a friday morning */}
                {beerData.map((beer) => {
                    console.log(`name: ${beer.name}`);
                    return <Beer name={beer.name} image={beer.image_url} abv={beer.abv} foodPairing={beer.food_pairing}/>
                })}
            </div>
        )
    }
         
}
 
export default Bar;