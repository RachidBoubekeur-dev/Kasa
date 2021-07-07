import { PureComponent } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import star from '../assets/star.png';
import Gallery from './desktop/Gallery';
import Tag from './desktop/Tag';
import Collapse from './desktop/Collapse';
import '../styles/Housing.css';

export default class Housing extends PureComponent {
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
                                        <Tag
                                            key={index}
                                            tag={tag}
                                            index={index}
                                        />
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
                                    <Collapse
                                        id={'description'}
                                        classElement={'divDescription'}
                                        title={'Description'}
                                        content={house.description}
                                    />
                                    <Collapse
                                        id={'equipements'}
                                        classElement={'divEquipements'}
                                        title={'Équipements'}
                                        content={house.equipments}
                                    />
                                </div>
                            </article>
                        ))
                    ) : (
                        <Error code="404" />
                    )}
                </section>
            </main>
        );
    }
}

Housing.propTypes = {
    housingsData: PropTypes.array.isRequired,
};
