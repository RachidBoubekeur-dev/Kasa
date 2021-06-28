import { useParams } from 'react-router-dom';
import Error from './Error';
import '../styles/Housing.css';

const Housing = ({ housingsData }) => {
    const { id } = useParams();
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
};

export default Housing;
