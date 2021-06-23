import logo from '../assets/logoWhite.svg'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer