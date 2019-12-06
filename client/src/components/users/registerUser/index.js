import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import UserRegistrationForm from '../../forms/userRegistrationForm'

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
                <Fragment>
                    <UserRegistrationForm />
                </Fragment>
            </div>
        );
    }
};

export default withRouter(RegisterUser);