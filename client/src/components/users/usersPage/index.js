import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from "../userCard/"
import * as api from '../../../api.js';



class usersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        api.getAllUsers()
            .then(resp => {
                this.setState({
                    isLoaded: true,
                    users: resp 
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error);
                }
            );
    }

    // state = { users: [{}] };
    // componentDidMount() {
    //     api.getAllUsers().then(resp => {
    //         this.setState({
    //             users: resp.users
    //         });
    //         localUserCache.populate(resp.users);
    //         console.log(typeof(resp.users));
    //     }).catch(console.error);
    // };



    render() {
        // userList = localUserCache.getAll();
        const { isLoaded, users } = this.state;
        if (!isLoaded) {
            return <div>Loading</div>
        }
        else {
            console.log(users);
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <UserCard user={users} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default withRouter(usersPage);