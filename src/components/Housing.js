import { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import previous from '../assets/previous.png';
import '../styles/Housing.css';

export default class Housing extends Component {
    render() {
        const { id } = this.props.match.params;
        const { housingsData } = this.props;
        const houseData = housingsData.filter((house) => {
            return house.id === id;
        });
        window.document.title = `Kasa - ${houseData[0].title}`;
        return (
            <main className="mainHousing">
                <section>
                    {houseData.length > 0 ? (
                        houseData.map((house) => (
                            <article key={house.id}>
                                <div className="slidePictures">
                                    <img
                                        className="previous"
                                        src={previous}
                                        alt="Previous"
                                    />
                                    <img
                                        className="next"
                                        src={previous}
                                        alt="Next"
                                    />
                                    <div>
                                        <img
                                            src={house.pictures[0]}
                                            alt={house.title}
                                        />
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <Error code="504" />
                    )}
                </section>
            </main>
        );
    }
}

Housing.propTypes = {
    housingsData: PropTypes.array.isRequired,
};
