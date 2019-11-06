import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../header';
import CarList from '../../carList';
import ListFilters from '../../listFilters';

const example = [{
    type: 'sedan',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'BMW',
    model: 'M4',
    year: '191',
    owner: 'carlet'
}, {
    type: 'hatchback',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'FIAT',
    model: 'punto',
    year: '161',
    owner: 'puntolover'
}, {
    type: 'suv',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'KIA',
    model: 'sportage',
    year: '142',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}, {
    type: 'estate',
    picture: { thumbnail: 'stories/stock.png' },
    brand: 'MERCEDES-BENZ',
    model: 'e300',
    year: '162',
    owner: 'carlet'
}
];

class Listings extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 offset-3">
                                <h1>Rentals available</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <Header noCars={example.length} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <ListFilters />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <CarList cars={example} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(Listings);