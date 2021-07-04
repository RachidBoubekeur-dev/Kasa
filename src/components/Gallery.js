import React, { Component } from 'react';
import chevron from '../assets/chevron.png';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';

export default class Gallery extends Component {
    render() {
        const { pictures } = this.props;

        /**
         * controlSlideShow - change l'image du carousel
         * @param  {String} action action à réaliser soit Previous ou Next
         */
        const controlSlideShow = (action) => {
            let spanActive = document.querySelector('.slidePictures > span');
            let pictureActive = document.querySelector('.slidePictures > img');
            let idPicture = parseInt(pictureActive.id);
            if (action === 'Next') {
                if (pictures.length - 1 > idPicture) {
                    pictureActive.id = `${idPicture + 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[idPicture + 1];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${idPicture + 2}/${
                        pictures.length
                    }`;
                } else {
                    pictureActive.id = '0';
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[0];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `1/${pictures.length}`;
                }
            } else if ('Previous') {
                if (idPicture !== 0) {
                    pictureActive.id = `${idPicture - 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures[idPicture - 1];
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${idPicture}/${pictures.length}`;
                } else {
                    pictureActive.id = `${pictures.length - 1}`;
                    pictureActive.style.opacity = '0';
                    pictureActive.src = pictures.slice(-1);
                    pictureActive.style.opacity = '1';
                    spanActive.innerHTML = `${pictures.length}/${pictures.length}`;
                }
            }
        };
        return (
            <div className="slideShow">
                {pictures.length > 1 && (
                    <div className="slideControl">
                        <img
                            className="previous"
                            src={chevron}
                            alt="Previous"
                            onClick={() => controlSlideShow('Previous')}
                        />
                        <img
                            className="next"
                            src={chevron}
                            alt="Next"
                            onClick={() => controlSlideShow('Next')}
                        />
                    </div>
                )}
                <div className="slidePictures">
                    <span>1/{pictures.length}</span>
                    <Hammer
                        onSwipe={(e) => {
                            e.direction === 2 && controlSlideShow('Next');
                            e.direction === 4 && controlSlideShow('Previous');
                        }}
                    >
                        <img id="0" src={pictures[0]} alt="Logement Kasa" />
                    </Hammer>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    pictures: PropTypes.array.isRequired,
};
