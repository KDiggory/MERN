// Previously destructuring within the function 
// but instead can write props in the function
// props is what is passed in without destructuring
import SubChild from "./SubChild";

const Child = (props) => {

    const yarnArray = props.array;
    console.log(yarnArray)
    return ( 
        //Render a sub child for every item in the array
        <div> 
        {/* {yarnArray.map((yarn, i) => {
            <SubChild key={i} yarn={yarn}/>
        })} */}
        <SubChild yarn='merino'/>
        {yarnArray.map((yarn, i) =>
        <SubChild key={i} yarn={yarn}/>)}
        </div>

     );
     // You shouldn't render an array without fgiving it an id or key!
}
 
export default Child;