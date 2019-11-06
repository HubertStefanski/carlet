import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div classname="container-fluid">
                    <h1> Welcome to carlet, your all-stop shop for airbnb-like car rentals</h1>
                </div>
            </div >
        );

    }
}
export default withRouter(Home);