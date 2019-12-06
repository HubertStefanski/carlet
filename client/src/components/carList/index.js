
import React, { Component } from "react";
import Car from "../car/";
import './carList.css';

export default class CarList extends Component {
    render(){
        const fromArray = Array.from(this.props.cars)
        const carCards = fromArray.map(c =>(
            <Car key={c.owner} car={c} />
        ));
        return(
            <div className="container-fluid cars bg-info">
                <div className="row">{carCards}</div>
            </div>
        );
    }
}