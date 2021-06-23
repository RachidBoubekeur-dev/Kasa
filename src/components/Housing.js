import { useParams } from 'react-router-dom';

const Housing = ({ housingsData }) => {
    const { index } = useParams();
    console.log(housingsData);
    console.log(index);
    return index
};

export default Housing