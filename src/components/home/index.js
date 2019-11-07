import { withRouter } from 'react-router-dom';
import React, { Component,Fragment } from 'react';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <div classname="container-fluid">
                        <h1> Welcome to carlet, your all-stop shop for airbnb-like car rentals</h1>
                    </div>
                </div >
            </Fragment>
        );

    }
}
export default withRouter(Home);