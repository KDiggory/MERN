const Content = ({page, verb, image, imageAlt}) => {
    return ( 
        <div>
        <h2> This is the content for the {page} page</h2>
        <h3> This is the {page} page, it is very {verb}  </h3>
        <h3> Image: </h3>
        <img src={image} alt={imageAlt} id='picture'></img>
        </div>
     );
}
 
export default Content;