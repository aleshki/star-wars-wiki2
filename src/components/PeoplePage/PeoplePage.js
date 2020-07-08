import React from 'react';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';

import './PeoplePage.css'
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';

export default class PeoplePage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: 3,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <ItemsList
                onItemClick={this.onPersonSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.gender}, ${item.mass}kg)`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                personId={this.state.selectedPerson}
            />
        );

        return (
            <div className="PeoplePage">
               <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}