// takes in name, phone number, image url, quote, address
import ContactCardSubChild from './ContactCardSubChild';

// const ContactCard = ({name, phoneNum, quote, address,image}) => {
//     return ( 
//         <div>
//             <h2> Name: {name}</h2>
//             <h2> Phone number: {phoneNum}</h2>
//             <h2> Quote: {quote}</h2>
//             <h2> Address: {address}</h2>
//             <img src={image} alt='A sushi cat'/>
//         </div>

//      );
// }
 
// export default ContactCard;

//USING PROPS INSTEAD

const ContactCard = (props) => {

    const catArray = props.array;
    console.log(catArray);
    return ( 
        <div>
            {catArray.map((cat, i) => {
                return <ContactCardSubChild key={i} cat={cat}/>
            })}
            {/* for (let cat of catArray) {
                 <ContactCardSubChild cat={cat}/>
            } */}
            {/* <ContactCardSubChild catName='Seaweed'/>
            {catArray.map((cat, i)=>{
            return <ContactCardSubChild key={i} cat={cat}/>
            })} */}
            {/* // <h2> Name: {catName}</h2>
            // <h2> Phone number: {phoneNum}</h2>
            // <h2> Quote: {quote}</h2>
            // <h2> Address: {address}</h2>
            // <img src={image} alt='A sushi cat'/> */}
        </div>

     );
}
 
export default ContactCard;