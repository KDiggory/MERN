// takes in name, phone number, image url, quote, address

const ContactCard = ({name, phoneNum, quote, address,image}) => {
    return ( 
        <div>
            <h2> Name: {name}</h2>
            <h2> Phone number: {phoneNum}</h2>
            <h2> Quote: {quote}</h2>
            <h2> Address: {address}</h2>
            <img src={image} alt='A sushi cat'/>
        </div>

     );
}
 
export default ContactCard;