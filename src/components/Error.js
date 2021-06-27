import { NavLink } from 'react-router-dom';
import '../styles/Error.css';

const Error = ({ code }) => {
    let messageError;
    if (code === '404')
        messageError = "Oups! La page que vous demandez n'existe pas.";
    else messageError = "Oups! Le serveur n'a pas répondu.";
    window.document.title = `${code} - ${messageError}`;
    return (
        <div className="divError">
            <h2>{code}</h2>
            <p>{messageError}</p>
            <NavLink to="/" exact>
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    );
};

export default Error;
