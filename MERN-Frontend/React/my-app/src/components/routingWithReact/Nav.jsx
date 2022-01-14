import {Link} from 'react-router-dom';

const Nav = () => {
    return ( <div> 
    <h2> Nav </h2> 
    {/* A way to access my about page <a href='/about'/> */}
    <Link to='/about'>
        <h4> About </h4>
    </Link>
    <Link to='/shop'>
        <h4> Shop </h4>
    </Link>
    <Link to='/basket'>
        <h4> Basket </h4>
    </Link>
    <Link to='/'>
        <h4> home </h4>
    </Link>

    </div>
    );
}
 
export default Nav;