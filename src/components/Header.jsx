import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

export default class Header extends React.Component {
    render () {
        return (
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
        );
    };
};