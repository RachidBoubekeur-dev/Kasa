import { Component } from 'react';
import logo from '../assets/logoWhite.svg';
import '../styles/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={logo} alt="Logo Kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}
