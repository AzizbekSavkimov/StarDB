import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }
    return (
      <div className="container-fluid">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb2 block">
            <div className="col-md-6">
                <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} />
            </div>
            <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
      </div>
    );
  }
};