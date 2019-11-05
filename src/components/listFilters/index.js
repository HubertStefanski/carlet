import React, {Component } from "react";
import "./filterStyle.css";

export default class listFilters extends Component {
    render(){
    return(
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-24">
                    <h1>
                        <span> filters </span>
                        <input type ="text" placeholder="Search by make"/>
                        <select id="price">
                            <option value="asc">ascending</option>
                            <option value="desc">descending</option>
                        </select>
                    </h1>
                </div>
            </div>
        </div>
    )
    }
}