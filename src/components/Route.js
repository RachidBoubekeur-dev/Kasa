import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';

export default class Route extends React.Component {
    render() {
        return (
            <Router forceRefresh={false}>
                <Header />
                <Switch>
                    {/* <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/housing">
                    <Housing />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/error">
                    <Error />
                </Route> */}
                </Switch>
            </Router>
        );
    };
};