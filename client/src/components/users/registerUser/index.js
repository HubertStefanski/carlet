import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';
import UserRegistrationForm from '../../forms/userRegistrationForm'


class RegisterUser extends Component {

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