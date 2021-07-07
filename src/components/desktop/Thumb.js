import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Thumb extends PureComponent {
    render() {
        const { id } = this.props;
        const { cover } = this.props;
        const { title } = this.props;
        return (
            <article tabIndex="0" className="housing" key={id}>
                <NavLink to={`/housing/${id}`} exact>
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </NavLink>
            </article>
        );
    }
}

Thumb.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
