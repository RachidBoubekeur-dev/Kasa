import { NavLink } from 'react-router-dom';
import '../styles/Error.css';

const Error = ({ code, setLoading }) => {
    const closeLoading = () => { setTimeout(() => { setLoading(false) }, 2000) };

    return (
        <div className="divError">
            <h2>{code}</h2>
            {code === "404" ?
                (<p>Oups! La page que vous demandez n'existe pas.</p>) :
                (<p>Oups! Le serveur n'a pas répondu.</p>)}
            <NavLink to="/" exact>Retourner sur la page d’accueil</NavLink>
            {closeLoading()}
        </div>
    )
};

export default Error