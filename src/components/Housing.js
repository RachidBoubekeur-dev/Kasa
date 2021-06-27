import { useParams } from 'react-router-dom';
import Error from './Error';
import '../styles/Housing.css';

const Housing = ({ housingsData }) => {
    const { id } = useParams();
    return (
        <div>
            <p>{id}</p>
            {housingsData.length > 0 ? (
                housingsData.map(
                    (house) =>
                        house.id === id && (
                            <div key={house.id}>
                                <p>{(window.document.title = house.title)}</p>
                                <p>{house.cover}</p>
                            </div>
                        )
                )
            ) : (
                <Error code="504" />
            )}
        </div>
    );
};

export default Housing;
