const ContactCardSubChild = ({cat}) => {
console.log(cat.catName);

    return ( 
        <div> 
        <h2> My name is: {cat.catName}</h2>
        <h2> My phone number is: {cat.phoneNum}</h2>
        <h2> I like to say: {cat.quote}</h2>
        <h2> I live at: {cat.address}</h2>
        <h2> Behold my magnificence: </h2> 
        <img src={cat.image} alt='A sushi cat'></img>
        </div>
     );
}
 
export default ContactCardSubChild ;