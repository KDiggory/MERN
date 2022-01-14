import Content from "./Content";

const About = () => {
    const page = 'about';
    const verb = 'informative';
    const image = 'https://images.all-free-download.com/images/graphiclarge/parrot_bird_yellow_224531.jpg'
    const imageAlt = 'A picture of a parrot'

    return ( 
        <div>
        <h3> About </h3>
        <Content page={page} verb={verb} image={image} imageAlt={imageAlt}/>
        </div>
     );
}

 
export default About;