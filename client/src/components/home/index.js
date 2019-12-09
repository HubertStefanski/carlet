import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    render() {
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

