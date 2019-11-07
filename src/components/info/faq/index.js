import React, { Component, Fragment } from 'react';

export default class Faq extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <h1>Frequently Asked Questions </h1>
                            <h2> Who are we?</h2>
                            <h3> We are carlet, a car sharing startup aiming to make renting cars easier by bringing you to others who are willing to rent their vehicle out</h3>
                            <h2> Why choose us?</h2>
                            <h3> We link you directly with renters, you have full clarity over the whole process and our full support throughout</h3>
                            <h2> I just found a deal on site X which is better than what you have</h2>
                            <h3> Carlet doesn't set the price for the rentals, we only provide users with a bridge between them and renters, our service charges are amongst the lowest in the industry</h3>
                            <h2> Why list your car?</h2>
                            <h3> The answer is simple,since our service charges are minimal, you are able to get more for less, while still having all the benefits of any other company!</h3>
                        </div>
                    </div>

                </Fragment>
            </div>
        );
    }
}