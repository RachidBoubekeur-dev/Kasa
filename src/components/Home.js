import homeImg from '../assets/home.png';
import { useHistory } from 'react-router-dom';
import Error from './Error';
import '../styles/Home.css';

const Home = ({ housingsData }) => {
    window.document.title =
        'Kasa - leaders de la location d’appartements entre particuliers en France';

    const history = useHistory();

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
                                onClick={() => history.push(`/housing/${id}`)}
                            >
                                <img src={cover} alt={title} />
                                <h2>{title}</h2>
                            </article>
                        ))
                    ) : (
                        <Error code="504" />
                    )}
                </div>
            </section>
        </main>
    );
};

export default Home;
