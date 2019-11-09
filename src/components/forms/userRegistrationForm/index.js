import React, { Component } from 'react';

export default class Form extends Component {


    state = { name: '', password: '', regDate: 'Implement timestamp', email: '' };



    handleNameChange = (e) => this.setState({ name: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });
    handleaEmailChange = (e) => this.setState({ email: e.target.value });

    render() {
        return (
            <form className="form bg-light text-dark">
                <h3>Register as a Carlet User!</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="username"
                        value={this.state.name}
                        onChange={this.handleNameeChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="form-group">
                    <input type="email"
                        className="form-control"
                        placeholder="email"
                        value={this.state.link}
                        onChange={this.handleEmailChange} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

