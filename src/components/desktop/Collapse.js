import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chevron from '../../assets/chevron.png';

export default class Collapse extends PureComponent {
    render() {
        const { id } = this.props;
        const { classElement } = this.props;
        const { title } = this.props;
        const { content } = this.props;

        const openDivCollapse = () => {
            let divElementImg = document.querySelector(`#${id} > p > img`);
            let divElementDiv = document.querySelector(`#${id} > div`);

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
            <div id={id} className={classElement}>
                <p onClick={() => openDivCollapse()}>
                    {title}
                    <img src={chevron} alt="Déployer" />
                </p>
                <div>
                    {typeof content === 'string' ? (
                        <p>{content}</p>
                    ) : (
                        content.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))
                    )}
                </div>
            </div>
        );
    }
}

Collapse.propTypes = {
    id: PropTypes.string.isRequired,
    classElement: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
