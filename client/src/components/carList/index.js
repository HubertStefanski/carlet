
import React, { Component } from "react";
import Car from "../car/";
import './carList.css';

export default class CarList extends Component {
    render(){
        const fromArray = Array.from(this.props.car)
        const carCards = fromArray.map(c =>(
            <Car key={c._id} car={c} />
        ));
        return(
            <div className="container-fluid cars bg-info">
                <div className="row">{carCards}</div>
            </div>
        );
    }
}