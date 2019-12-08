import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from "../userCard/"
import * as api from './api';
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

        users = _.sortBy(this.state.user, user => user.userRating);
        return (
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <UserCard user={users} />x
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(usersPage);