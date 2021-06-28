import { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import '../styles/Housing.css';

export default class Housing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            housingsData: this.props.housingsData,
        };
    }

    render() {
        const { id } = this.state;
        const { housingsData } = this.state;
        const houseData = housingsData.filter((house) => {
            return house.id === id;
        });
        return (
            <div>
                {houseData.length > 0 ? (
                    houseData.map((house) => (
                        <div key={house.id}>
                            <p>{(window.document.title = house.title)}</p>
                            <p>{house.cover}</p>
                            <p>{house.id}</p>
                        </div>
                    ))
                ) : (
                    <Error code="504" />
                )}
            </div>
        );
    }
}

Housing.propTypes = {
    housingsData: PropTypes.array.isRequired,
};
