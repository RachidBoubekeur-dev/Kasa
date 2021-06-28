import { Component } from 'react';
import Routing from './Routing';
import '../styles/App.css';

export default class App extends Component {
    render() {
        return (
            <div className="divApp">
                <Routing />
            </div>
        );
    }
}
