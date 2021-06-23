import { useState, useEffect } from 'react';
import Routing from './Routing';
import Footer from './Footer';
import imgLoading from '../assets/loading.gif';
import '../styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => { setLoading(true); }, []);

  return (
    <div className="divApp">
      {loading && (
        <div className="divLoading">
          <img src={imgLoading} alt="Chargement de la page..." />
        </div>
      )}
      <div>
        <Routing setLoading={setLoading} />
        <Footer />
      </div>
    </div>
  )
};

export default App;
