import homeImg from '../assets/home.png';
import { useHistory } from 'react-router-dom';
import Error from './Error';
import '../styles/Home.css';

const Home = ({ housingsData, setLoading }) => {
    const history = useHistory();
    const closeLoading = () => { setTimeout(() => { setLoading(false) }, 2000) };
    return (
        <main className="mainHome">
            <section>
                <article tabIndex="0">
                    <img src={homeImg} alt="Paysage de montagne" />
                    <h2>Chez vous, <span>partout et ailleurs</span></h2>
                </article>
                <div>
                {housingsData.length > 0 ? (housingsData.map(({ id, cover, title }, index) => (
                    <article tabIndex="0" className="housing" key={id} onClick={() => history.push(`/housing/${index}`)}>
                        <img src={cover} alt={title} />
                        <h2>{title}</h2>
                    </article>
                ))) : (<Error code="504" setLoading={setLoading} />)}
                </div>
            </section>
            {closeLoading()}
        </main>
    )
};

export default Home