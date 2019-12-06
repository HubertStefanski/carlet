import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from "../userCard/"
import * as api from './api';
let request = require("superagent");


class usersPage extends Component {
    componentDidMount() {
        request.get("").end((error, res) => {
            if (res) {
                let users = JSON.parse(res.text);
                localUserCache.populate(users);
                this.setState({});
            } else {
                console.log(error);
            }
        });
    }
    render() {

        let updatedUserList = localUserCache.getAll();
        return (
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <UserCard user={updatedUserList} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(usersPage);