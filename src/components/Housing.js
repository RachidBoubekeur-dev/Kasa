import { useParams } from 'react-router-dom';
import '../styles/Housing.css';

const Housing = ({ housingsData, setLoading }) => {
    let { index } = useParams();
    index = parseInt(index);
    console.log(housingsData);
    const closeLoading = () => { setTimeout(() => { setLoading(false) }, 2000)};
    // window.document.title = housingsData[0].title;
    return (
        <div>
            <p>{index}</p>
            {closeLoading()}
        </div>
    )
};

export default Housing