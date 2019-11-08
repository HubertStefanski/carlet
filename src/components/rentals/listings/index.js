import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../header';
import CarList from '../../carList';
import ListFilters from '../../listFilters';
import localCache from "../../../resources/localCache";
let request = require("superagent");





class Listings extends Component {
    componentDidMount() {
        request.get("http://localhost:3001/car").end((error, res) => {
            if (res) {
                let cars = JSON.parse(res.text);
                localCache.populate(cars);
                this.setState({});
            } else {
                console.log(error);
            }
        });
    }
    render() {

        let updatedCarsList = localCache.getAll();
        return (
            <Fragment>
                <div>

                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <h1>Our offers  <Header noCars={updatedCarsList.length} /> </h1>
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