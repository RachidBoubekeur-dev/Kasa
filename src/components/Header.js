import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <nav className="navHeader">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <img src={logo} alt="Logo Kasa" />
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about">
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
