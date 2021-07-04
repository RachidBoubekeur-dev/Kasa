import { Component } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import '../styles/Housing.css';
import chevron from '../assets/chevron.png';
import star from '../assets/star.png';
import Gallery from './Gallery';

export default class Housing extends Component {
    render() {
        window.scrollTo(0, 0);
        const { id } = this.props.match.params;
        const { housingsData } = this.props;
        const houseData = housingsData.filter((house) => {
            return house.id === id;
        });

        /**
         * setTitle - change le titre de la page
         * @param  {String} title titre du logement
         */
        const setTitle = (title) => {
            window.document.title = `Kasa - ${title}`;
        };

        /**
         * getRating - Met en forme la note du logement
         * @param  {String} rating note du logement
         * @return {Array} arrayRating contient les notes sous forme HTML
         */
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

        /**
         * openDivCollapse - Ouvre ou ferme les collapses demandés
         * @param  {String} divElement className concerner
         */
        const openDivCollapse = (divElement) => {
            let divElementImg = document.querySelector(
                `${divElement} > p > img`
            );
            let divElementDiv = document.querySelector(`${divElement} > div`);

            if (divElementImg.alt === 'Déployer') {
                divElementImg.alt = 'Réduire';
                divElementImg.style.transform = 'rotate(90deg)';
                divElementDiv.style.paddingTop = '20px';
                if (window.innerWidth >= 768 && window.innerWidth < 1440) {
                    divElementDiv.style.paddingBottom = '20px';
                    divElementDiv.style.height = '128px';
                } else if (window.innerWidth >= 1440) {
                    divElementDiv.style.paddingBottom = '30px';
                    divElementDiv.style.height = '200px';
                } else {
                    divElementDiv.style.paddingBottom = '5px';
                    divElementDiv.style.height = 'initial';
                }
            } else {
                divElementImg.alt = 'Déployer';
                divElementImg.style.transform = 'rotate(270deg)';
                divElementDiv.style.height = '0px';
                divElementDiv.style.paddingTop = '0px';
                divElementDiv.style.paddingBottom = '0px';
            }
        };

        return (
            <main className="mainHousing">
                <section>
                    {houseData.length > 0 ? (
                        houseData.map((house) => (
                            <article key={house.id}>
                                {setTitle(house.title)}
                                <Gallery pictures={house.pictures} />
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
                                <div className="divCollapse">
                                    <div className="divDescription">
                                        <p
                                            onClick={() =>
                                                openDivCollapse(
                                                    '.divDescription'
                                                )
                                            }
                                        >
                                            Description
                                            <img src={chevron} alt="Déployer" />
                                        </p>
                                        <div>
                                            <p>{house.description}</p>
                                        </div>
                                    </div>
                                    <div className="divEquipements">
                                        <p
                                            onClick={() =>
                                                openDivCollapse(
                                                    '.divEquipements'
                                                )
                                            }
                                        >
                                            Équipements
                                            <img src={chevron} alt="Déployer" />
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
