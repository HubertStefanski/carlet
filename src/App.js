import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import CarList from './components/carList';
import Navigator from './components/navigator';


export default class App extends Component {
  render() {
    const example = [{
      type: 'sedan',
      picture: { thumbnail: '../stories/stock.png' },
      brand: 'BMW',
      model: 'M4',
      year: '191',
      owner: 'carlet'
    }, {
      type: 'hatchback',
      picture: { thumbnail: '../stories/stock.png' },
      brand: 'FIAT',
      model: 'punto',
      year: '161',
      owner: 'puntolover'
    }, {
      type: 'suv',
      picture: { thumbnail: '../stories/stock.png' },
      brand: 'KIA',
      model: 'sportage',
      year: '142',
      owner: 'carlet'
    }, {
      type: 'estate',
      picture: { thumbnail: '../stories/stock.png' },
      brand: 'MERCEDES-BENZ',
      model: 'e300',
      year: '162',
      owner: 'carlet'
    }
    ];
    const cars =[{example,example,example,example,example}]
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="navigator">
            <Navigator />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-3">
              <h1><a href='/'>Rentals available</a></h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-3">
              <Header noCars={example.length} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-3">
              <CarList cars={cars} />
            </div>
          </div>
        </div>
      </div>

    );

  }
}
