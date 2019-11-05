import React, { Component } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = { user: null };
        this.widget = new OktaSignIn({
            baseUrl: 'https://{oktaOrgUrl}',
            clientId: '{clientId}',
            redirectUri: 'http://localhost:3000',
            authParams: {
                responseType: 'id_token'
            }
        });

        this.showLogin = this.showLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.widget.session.get((response) => {
            if (response.status !== 'INACTIVE') {
                this.setState({ user: response.login });
            } else {
                this.showLogin();
            }
        });
    }

    showLogin() {
        Backbone.history.stop();
        this.widget.renderEl({ el: this.loginContainer },
            (response) => {
                this.setState({ user: response.claims.email });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    logout() {
        this.widget.signOut(() => {
            this.setState({ user: null });
            this.showLogin();
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container-fluid"></div>
                {this.state.user ? (
                    <div className="container">
                        <div>Welcome, {this.state.user}!</div>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                ) : null}
                {this.state.user ? null : (
                    <div ref={(div) => { this.loginContainer = div; }} />
                )}
            </div>
            
        );
    }
}
