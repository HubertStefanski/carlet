import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/';
import Listings from './components/rentals/listings/';
import UserListings from './components/rentals/listings/';
import Faq from './components/info/faq';
import Tnc from './components/info/tnc';
import LoginPage from './components/loginPage';

class Router extends Component {
    render() {
        return (
            <div>
                <App />

                <BrowserRouter>
                    <div className="jumbotron">
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path="/" Component={Home} />
                                <Route path="/rentals/listings" component={Listings} />
                                <Route path="/rentals/userListings" component={UserListings} />
                                <Route path="/info/faq" component={Faq} />
                                <Route path="/info/tnc" component={Tnc} />
                                <Route path="/login" component={LoginPage} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}





ReactDOM.render(<Router />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
