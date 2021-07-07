import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends PureComponent {
    render() {
        const { index } = this.props;
        const { tag } = this.props;
        return (
            <span className="tag" key={index}>
                {tag}
            </span>
        );
    }
}

Tag.propTypes = {
    index: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
};
