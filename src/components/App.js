import { useState, useEffect } from 'react';
import Routing from './Routing'
import imgLoading from '../assets/loading.gif';
import '../styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false) }, 3000);
    setTimeout(() => { setRoute(true) }, 500);
  }, []);

  return (
    <div className="divApp">
      {loading && (
        <div className="divLoading">
          <img src={imgLoading} alt="Chargement de la page..." />
        </div>
      )}
      {route && (
        <Routing />
      )}
    </div>
  )
};

export default App;
