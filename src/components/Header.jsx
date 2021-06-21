import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render () {
        return (
            <ul>
                <NavLink exact to="/">
                    <li>Test</li>
                </NavLink>
            </ul>
        );
    };
};