import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage';
import PlanetPage from '../PlanetPage';
import Planet from '../Planet';
import SwapiService from '../../services/SwapiService';
import { SwapiProvider } from '../SwapiServiceContext';

export default class App extends React.Component {

    swapi = new SwapiService();

    state = {
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }
        return (
            <SwapiProvider value={this.swapi}>
                <div className="App">
                    <Header />
                    <RandomPlanet />
                    <ErrorTest />
                    <PeoplePage />
                    <PlanetPage />
                </div>
            </SwapiProvider>
        )
    }
}