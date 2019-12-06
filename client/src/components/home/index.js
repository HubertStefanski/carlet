import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

const Home = props => {
    {
        return (
            <Fragment>
                <div className="row">
                    <div className="container-fluid">
                        <div className="col-md-6 offset-3">
                            <h1> Welcome to Carlet your one stop shop for all your car letting needs</h1>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}

export default withRouter(Home);

