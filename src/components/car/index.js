import React, { Component } from "react";
import "./car.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { isParenthesizedExpression } from "@babel/types";

class Car extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={this.props.car.type}
                        src={this.props.car.picture.thumbnail}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.car.brand} ${
                                this.props.car.make
                                }`}
                        </h5>
                        <p key="owner">
                            <span> {this.props.car.owner} </span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-default w-100"}>
                                {" Edit "}
                            </button>
                            <button type="button" className={"btn btn-danger w-100"}>
                                {"Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Car;