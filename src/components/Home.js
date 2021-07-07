import { PureComponent } from 'react';
import homeImg from '../assets/home.png';
import Error from './Error';
import Thumb from './desktop/Thumb';
import PropTypes from 'prop-types';
import '../styles/Home.css';

export default class Home extends PureComponent {
    render() {
        const { housingsData } = this.props;
        window.scrollTo(0, 0);
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
                                <Thumb
                                    key={id}
                                    id={id}
                                    cover={cover}
                                    title={title}
                                />
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
