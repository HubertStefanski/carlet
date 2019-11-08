import React, { Component } from "react";
import "./car.css";
import "../../fontawesome";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class Car extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <MDBCol>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid" src={this.props.car.picture.thumbnail} waves />
                        <MDBCardBody>
                            <MDBCardTitle>{this.props.car.brand} {this.props.car.model} {this.props.car.year}</MDBCardTitle>
                            <MDBCardText>
                                {this.props.car.price}
                            </MDBCardText>
                            <MDBBtn href="#">View Details</MDBBtn>
                            <MDBBtn href="#">Message Owner {this.props.car.owner}</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </div>

        );

    }
}
