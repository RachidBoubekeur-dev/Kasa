import { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imgLoading from '../assets/loading.gif';
import Header from './Header';
import Home from './Home';
import Housing from './Housing';
import About from './About';
import Error from './Error';
import Footer from './Footer';
import '../styles/App.css';

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            loading: true,
            housingsData: [],
        };
    }

    componentDidMount() {
        fetch(`${window.origin}/housings.json`)
            .then((response) => response.json())
            .then((data) => this.setState({ housingsData: data }));
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        const { loading } = this.state;
        const { housingsData } = this.state;
        return (
            <div className="divApp">
                <div>
                    {loading && (
                        <div className="divLoading">
                            <img
                                src={imgLoading}
                                alt="Chargement de la page..."
                            />
                        </div>
                    )}
                    <Router forceRefresh={false}>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <Home housingsData={housingsData} />
                            </Route>
                            <Route
                                path="/housing/:id"
                                exact
                                render={(props) => (
                                    <Housing
                                        {...props}
                                        housingsData={housingsData}
                                    />
                                )}
                            />
                            <Route path="/about" exact>
                                <About />
                            </Route>
                            <Route path="/">
                                <Error code="404" />
                            </Route>
                        </Switch>
                    </Router>
                    <Footer />
                </div>
            </div>
        );
    }
}
