import React from 'react';
import homeImg from '../assets/home.png';
import '../styles/Home.css';

export default class Home extends React.Component {
    render () {
        return (
            <main className="mainHome">
                <article>
                    <img src={homeImg} alt="Paysage de montagne" />
                    <h2>Chez vous, <span>partout et ailleurs</span></h2>
                </article>
            </main>
        );
    };
};