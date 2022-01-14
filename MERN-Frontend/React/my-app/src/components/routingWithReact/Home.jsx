import Content from "./Content";

const Home = () => {
    const page = 'home';
    const verb = 'homely';
    const image = 'https://res.cloudinary.com/demo/image/upload/q_90/happy_dog.jpg'
    const imageAlt = 'A picture of a dog, he looks happy'

    return ( 
        <div>
        <h3> Home </h3>
        <Content page={page} verb={verb} image={image} imageAlt={imageAlt}/>
        </div>
     );
}
 
export default Home;