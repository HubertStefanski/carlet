import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from "../userCard/"
import * as api from './../../../api.js';
let request = require("superagent");


class usersPage extends Component {
    state = { users: [{}] };
    componentDidMount() {
        api.getAllUsers().then(resp => {
            this.setState({
                users: resp.users
            });
        }).catch(console.error);
    };

    render() {

        const users = api.getAllUsers();
        return (
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <UserCard user={users} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(usersPage);