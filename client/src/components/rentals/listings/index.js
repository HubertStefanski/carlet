import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../header';
import CarList from '../../carList';
import ListFilters from '../../listFilters';
import localCarCache from "../../../resources/localCarCache";
import * as api from '../../../api.js';

var updatedCarsList = null;



class Listings extends Component {
    state = { cars: [{}] };
    componenDidMount() {
        api.getAllCars().then(resp => {
            this.setState({
                cars: resp.cars
            });
            localCarCache.populate(resp.cars);
            console.log("reached localCachepopulate");
        }).catch(console.error);
    };


    render() {

       
        return (
            <Fragment>
                 updatedCarsList = localCarCache.getAll();
                <div>

                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <Header noCars={updatedCarsList.length} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <ListFilters />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <CarList cars={updatedCarsList} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(Listings);