import homeImg from '../assets/home.png';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ housingsData }) => {
    const history = useHistory();

    return (
        <main className="mainHome">
            <article>
                <img src={homeImg} alt="Paysage de montagne" />
                <h2>Chez vous, <span>partout et ailleurs</span></h2>
            </article>
            <div>
                {housingsData.length > 0 ? (housingsData.map(({ id, cover, title }, index) => (
                    <article key={id} onClick={() => history.push(`/housing/${index}`)}>
                        <img src={cover} alt={title} />
                        <h2>{title}</h2>
                    </article>
                ))) : ('404')}
            </div>
        </main>
    )
};

export default Home