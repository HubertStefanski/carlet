import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from "../userCard/"
import localUserCache from "../../../resources/localUserCache";
import * as api from '../../../api.js';

var userList = null;

class usersPage extends Component {
    state = { users: [{}] };
    componentDidMount() {
        api.getAllUsers().then(resp => {
            this.setState({
                users: resp.users
            });
            localUserCache.populate(resp.users);
            console.log(resp.users);
        }).catch(console.error);
    };



    render() {
        userList = localUserCache.getAll();
        return (
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <UserCard user={userList} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default withRouter(usersPage);