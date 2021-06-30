import { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import '../styles/Housing.css';
import chevron from '../assets/chevron.png';
import star from '../assets/star.png';

export default class Housing extends Component {
    render() {
        const { id } = this.props.match.params;
        const { housingsData } = this.props;
        const houseData = housingsData.filter((house) => {
            return house.id === id;
        });

        const setTitle = (title) => {
            window.document.title = `Kasa - ${title}`;
        };

        const getRating = (rating) => {
            let arrayRating = [];
            for (let i = 1; i < 6; i++) {
                let starStyle;
                if (i > parseInt(rating)) starStyle = 'starGray';
                else starStyle = 'starRed';
                arrayRating.push(
                    <span key={i}>
                        <img
                            className={starStyle}
                            src={star}
                            alt="Note du logement"
                        />
                    </span>
                );
            }
            return arrayRating;
        };

        return (
            <main className="mainHousing">
                <section>
                    {houseData.length > 0 ? (
                        houseData.map((house) => (
                            <article key={house.id}>
                                <div className="slidePictures">
                                    <img
                                        className="previous"
                                        src={chevron}
                                        alt="Previous"
                                    />
                                    <img
                                        className="next"
                                        src={chevron}
                                        alt="Next"
                                    />
                                    <div>
                                        <img
                                            src={house.pictures[0]}
                                            alt={house.title}
                                        />
                                    </div>
                                </div>
                                <h2>{house.title}</h2>
                                <h3>{house.location}</h3>
                                <div className="divTags">
                                    {house.tags.map((tag, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                                <div className="divRatingAndHost">
                                    <div className="divRating">
                                        {getRating(house.rating)}
                                    </div>
                                    <div className="divHost">
                                        <span>
                                            {house.host.name.split(' ')[0]}
                                            <br />
                                            {house.host.name.split(' ')[1]}
                                        </span>
                                        <img
                                            src={house.host.picture}
                                            alt={house.host.name}
                                        />
                                    </div>
                                </div>
                                <div className="divDetails">
                                    <div className="divDescription">
                                        <p>
                                            Description
                                            <img src={chevron} alt="Déployer" />
                                        </p>
                                        <div>
                                            <p>{house.description}</p>
                                        </div>
                                    </div>
                                    <div className="divEquipements">
                                        <p>
                                            Équipements
                                            <img src={chevron} alt="Réduire" />
                                        </p>
                                        <div>
                                            {house.equipments.map(
                                                (equipment, index) => (
                                                    <p key={index}>
                                                        {equipment}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {setTitle(house.title)}
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
