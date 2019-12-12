import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../header';
import CarList from '../../carList';
import ListFilters from '../../listFilters';
import * as api from '../../../api.js';



class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        api.getAllCars()
            .then(resp => {
                this.setState({
                    isLoaded: true,
                    cars: resp
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error);
                }
            );
    }

    render() {
        const { isLoaded, cars } = this.state;
        if (!isLoaded) {
            return <div>Loading</div>
        }
        else {
            return (
                <Fragment>

                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <Header noCars={cars.length} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <ListFilters />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <CarList car={cars} />
                        </div>
                    </div>

                </Fragment>
            );
        }
    }
}
export default withRouter(Listings);