import ContactCard from './/ContactCard';

// const ContactCardManager = () => {
//     return ( 
//        <div>
//            <ContactCard name = 'Seaweed' phoneNum='12345'quote='I look like a tasty piece of sushi' address='Sushi street, Yumtown' 
//            image='https://www.foodrepublic.com/wp-content/uploads/2013/05/7.jpg'></ContactCard>
//            <ContactCard name = 'Ginger' phoneNum='12345'quote='I look like a piece of sushi that might bite back' address='Sushi street, Yumtown' 
//            image='https://www.boredpanda.com/blog/wp-content/uploads/2015/10/sushi-cats-tange-nakimushi-peanuts-designboom-09__880.jpg'></ContactCard>
//            <ContactCard name = 'Pricilla' phoneNum='12345'quote='Im more into handbags than fish..' address='Sushi street, Yumtown' 
//            image='https://laughingsquid.com/wp-content/uploads/2013/05/57136749_o1.jpg'></ContactCard>
//            <ContactCard name = 'Pickles' phoneNum='12345'quote='Why is there cucumber on my back??!!' address='Sushi street, Yumtown' 
//            image='https://www.spoon-tamago.com/wp-content/uploads/2014/06/Neko-Zushi-prints9E3.jpg'></ContactCard>
           
           
//        </div> 
//      );
// }
 
// export default ContactCardManager ;


//USING PROPS

const ContactCardManager = () => {
    
           const arrayCats = [
              { catName:'Seaweed',
               phoneNum: '12345',
               quote: 'I look like a tasty piece of sushi',
               address: 'Sushi street, Yumtown', 
               image:'https://www.foodrepublic.com/wp-content/uploads/2013/05/7.jpg'
           }, 
            { catName: 'Ginger',
               phoneNum: '12345',
               quote: 'I look like a piece of sushi that might bite back',
               address: 'Sushi street, Yumtown', 
               image:'https://www.boredpanda.com/blog/wp-content/uploads/2015/10/sushi-cats-tange-nakimushi-peanuts-designboom-09__880.jpg'
           },
            { catName: 'Pricilla',
               phoneNum: '12345',
               quote: 'Im more into handbags than fish..',
               address: 'Sushi street, Yumtown', 
               image:'https://laughingsquid.com/wp-content/uploads/2013/05/57136749_o1.jpg'
           },
            { catName: 'Pickles',
               phoneNum: '12345',
               quote: 'Why is there cucumber on my back??!!',
               address: 'Sushi street, Yumtown', 
               image:'https://www.spoon-tamago.com/wp-content/uploads/2014/06/Neko-Zushi-prints9E3.jpg'
           }
           ]
           return ( 
            <div>
                <ContactCard array={arrayCats}/>
           </div> 
     );
}
 
export default ContactCardManager ;