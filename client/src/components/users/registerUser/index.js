import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import UserRegistrationForm from '../../forms/userRegistrationForm/index'


class RegisterUser extends Component {

    render() {
        return (
            <div>

                <UserRegistrationForm />

            </div>
        );
    }
};

export default withRouter(RegisterUser);