import logo from '../assets/img/bakers-inn-logo.png';
import { Link, NavLink } from 'react-router-dom';
// import Button from './Button';
import Button from './Button';


const Navbar = () => {
    return ( 
    <div className="navbar">
        <Link to ='/'>
            <img src={logo} alt="baker's_inn logo" className='logo' />
        </Link>
        <ul className='menu'>
            <li className='menu-item'><NavLink to = "/AboutPage">About Us</NavLink></li>
            <li className='menu-item'><NavLink to = "/Products">Products</NavLink></li>
            <li className='menu-item'><NavLink to = "/Recipes">Recipes</NavLink></li>
            <li className='menu-item'><NavLink to = "Kids">Kid's Corner</NavLink></li>
            <Button toPath= '/contact' title="Contact Us" />
            
        </ul>
    </div>

     );
}
 
export default Navbar;