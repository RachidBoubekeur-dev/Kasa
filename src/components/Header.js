import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <nav className="navHeader">
            <ul>
                <NavLink exact to="/">
                    <li><img src={logo} alt="Logo Kasa" /></li>
                </NavLink>
                <NavLink exact to="/">
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink exact to="/about">
                    <li>A PROPOS</li>
                </NavLink>
            </ul>
        </nav>
    )
};

export default Header