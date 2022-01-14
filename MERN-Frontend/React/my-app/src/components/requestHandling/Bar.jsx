import {useEffect, useState} from 'react';
import axios from 'axios';

const Bar = () => {

    // Our state is going to be the data we pull from the api
    const [beerData, setBeerData] = useState([]);

    // state to check if the api has errored
    const [error, setError] = useState(null);

    // state to check if the api has loaded
    const [loaded, setLoaded] = useState(false);

   

    // create the function to pull the data from the api
    // const getData = () => {

    //     console.log(beerData);

    //     // axios.get/post/delete('</pathToSendTo>', body / options)
    //    axios.get(`https://api.punkapi.com/v2/beers`)

    //     // once have data set loaded to true and beer data to whatever the response is
    //     .then((res) => {
    //         setLoaded(true)
    //         console.log(res);
    //         setBeerData(res.data)
    //     })
    //     .catch((error) => {
    //         setLoaded(true);
    //         setError(error);
    //     })
    //     .then(() => {
    //         setTimeout(() => {
    //         console.log(beerData);
    //         }, 2000
    //         );
            
    //         console.log('request finished');
    //     })
    // };
     // useEffect to pull the data
    // this will have passed in - a function to pull our data
    useEffect(() => {

        console.log(beerData);

        // axios.get/post/delete('</pathToSendTo>', body / options)
       axios.get(`https://api.punkapi.com/v2/beers`)

        // once have data set loaded to true and beer data to whatever the response is
        .then((res) => {
            setLoaded(true)
            console.log('================================');
            console.log('res');
            console.log(res);
            setBeerData(res.data); // the data is in here
            console.log('================================');
            console.log('====== res.data ======');
            console.log(res.data);
        
        },)
        .catch((error) => {
            setLoaded(true);
            setError(error);
        })
        .then(() => {
            setTimeout(() => {
            console.log('================================');
            console.log(' ==== beerData - after 2 seconds ====');
            console.log(beerData);
            }, 2000
            );
            
            console.log('request finished');
            console.log('================================');
            console.log('====== beerData[] ======');
            console.log(beerData[3]); // sometimes these come back as undefined
             console.log(beerData[4]);
        })
    }, []); // leaving the [] means run this once when the page loads
    if(error == true) {
        return <h2> Oops, there has been an error. Please refresh the page</h2>
    } else if (!loaded) {
        return <h2> Oh no, data has not loaded. Please wait </h2>
    } else  {
        return ( 
        <div> 
            <h2> Woo, no problems data is fine! </h2>
            <p> The beer at index 5 is called {beerData[5].name}</p>


        </div>
        )
    }
//     return (
// <div>
// <h2> Bar page </h2>
// {/* <h3> Some data: {beerData[3].name}</h3> */}

// </div>

//       );
}
 
export default Bar;