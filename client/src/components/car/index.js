import React, { Component } from 'react';
import './car.css';
import '../../fontawesome';

export default class Car extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <p key="uid">
                        <span> Listing ID {this.props.car._id} </span>
                    </p>
                    <img
                        className="card-img-tag center "
                        alt={this.props.car.type}
                        src={this.props.car.picture}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.car.brand} ${
                                this.props.car.model
                                } ${this.props.car.year}`}
                        </h5>
                        <p key="owner">
                            <span> {this.props.car.owner} </span>
                        </p>
                        <p key="price">
                            <span> {this.props.car.price} /day </span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className="btn btn-info w-100">
                                View Details
                            </button>
                            <button type="button" className="btn btn-primary w-100">
                                Rent this car
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
