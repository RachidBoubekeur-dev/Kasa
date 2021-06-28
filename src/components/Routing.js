import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Housing from './Housing';
import Error from './Error';

const Routing = ({ setLoading }) => {
    const [housingsData, setHousingsData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.20:3000/housings.json')
            .then((response) => response.json())
            .then((data) => setHousingsData(data));
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    });

    return (
        <Router forceRefresh={false}>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home housingsData={housingsData} />
                </Route>
                <Route path="/housing/:id" exact>
                    <Housing housingsData={housingsData} />
                </Route>
                {/* <Route path="/about" exact>
                    <About />
                </Route> */}
                <Route path="/">
                    <Error code="404" />
                </Route>
            </Switch>
        </Router>
    );
};

export default Routing;
