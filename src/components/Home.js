import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from '../assets/home.png';
import Error from './Error';
import PropTypes from 'prop-types';
import '../styles/Home.css';

export default class Home extends Component {
    render() {
        const { housingsData } = this.props;
        window.document.title =
            'Kasa - leaders de la location d’appartements entre particuliers en France';
        return (
            <main className="mainHome">
                <section>
                    <article tabIndex="0">
                        <img src={homeImg} alt="Paysage de montagne" />
                        <h2>
                            Chez vous, <span>partout et ailleurs</span>
                        </h2>
                    </article>
                    <div>
                        {housingsData.length > 0 ? (
                            housingsData.map(({ id, cover, title }) => (
                                <article
                                    tabIndex="0"
                                    className="housing"
                                    key={id}
                                >
                                    <NavLink to={`/housing/${id}`} exact>
                                        <img src={cover} alt={title} />
                                        <h2>{title}</h2>
                                    </NavLink>
                                </article>
                            ))
                        ) : (
                            <Error code="504" />
                        )}
                    </div>
                </section>
            </main>
        );
    }
}

Home.propTypes = {
    housingsData: PropTypes.array.isRequired,
};
