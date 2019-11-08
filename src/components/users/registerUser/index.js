import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { withRouter } from 'react-router-dom';

class RegisterUser extends Component {

    
    // componentDidMount() {
    //     request.post("http://localhost:3001/car").end((error, res) => {
    //         if (res) {
    //             let newUser
    //             let  = JSON.parse(res.text);
    //             this.setState({});
    //         } else {
    //             console.log(error);
    //         }
    //     });
    // }
    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit="onSubmit(this)">
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput
                                        label="user name"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Confirm your email"
                                        icon="exclamation-triangle"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" onClick="s">Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer >
            </div >
        );
    }
};

export default withRouter(RegisterUser);