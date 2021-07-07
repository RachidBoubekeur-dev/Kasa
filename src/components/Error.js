import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Error.css';

export default class Error extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code,
        };
    }

    render() {
        const { code } = this.props;
        let messageError;
        if (code === '404') {
            messageError = "Oups! La page que vous demandez n'existe pas.";
        } else {
            messageError = "Oups! Le serveur n'a pas répondu.";
        }
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
    }
}

Error.propTypes = {
    code: PropTypes.string.isRequired,
};
