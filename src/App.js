import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navigator from './components/navigator';
import Car from './components/car';
import CarList from './components/carList/';
import ListFilter from './components/listFilters/';
import Header from './components/header/';


const stockCar = {
  type: 'sedan',
  picture: { thumbnail: './stock.png' },
  brand: 'BMW',
  model: 'M4',
  year: '191',
  owner: 'carlet'
}

const cars = [stockCar, stockCar, stockCar, stockCar, stockCar, stockCar, stockCar, stockCar, stockCar]


export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div classname="container-fluid">
          <Navigator/>
        </div>
      </div >
    );

  }
}

