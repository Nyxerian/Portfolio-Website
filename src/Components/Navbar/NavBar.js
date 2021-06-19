import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (

    <header className='navbar'>
        <Link to="/" className='navbar__title'>Home</Link>
        <Link to="/About"  className='navbar__item'>About Me</Link>
        <Link to="/CV" className='navbar__item'>CV</Link>
        <Link to="/Projects" className='navbar__item'>Projects</Link>     
        <Link to="/Contact" className='navbar__item'>Contact</Link>
    </header>
);
    
}