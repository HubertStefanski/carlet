import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h1>Frequently Asked Questions </h1>
                        <h1> Who are we?</h1>
                        <h1> We are carlet, a car sharing startup aiming to make renting cars easier by bringing you to others who are willing to rent their vehicle out</h1>
                        <h1> Why choose us?</h1>
                        <h1> We link you directly with renters, you have full clarity over the whole process and our full support throughout</h1>
                        <h1> I just found a deal on site X which is better than what you have</h1>
                        <h1> Carlet doesn't set the price for the rentals, we only provide users with a bridge between them and renters, our service charges are amongst the lowest in the industry</h1>
                        <h1> Why list your car?</h1>
                        <h1> The answer is simple,since our service charges are minimal, you are able to get more for less, while still having all the benefits of any other company!</h1>
                    </div>
                </div>

            </Fragment>
        );
    }
}
export default withRouter(Home);