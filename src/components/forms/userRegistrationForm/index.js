import React, { Component } from 'react';
let request = require("superagent");

export default class Form extends Component {


    state = { name: '', password: '', regDate: 'Implement timestamp', email: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.handleAdd(this.state.name, this.state.password, this.state.email)
        this.setState({ name: '', password: '', email: '' })
        // data = { name: this.state.name, password: this.state.password, email: this.state.email }
        // var toJSON = JSON.stringify(`{${this.props.state}}`)
        // request.post("http://localhost:3002/user").end((error, res) => {
        //     if (res) {
        //         let data = toJSON;x  
        //         this.setState({ data });
        //     } else {
        //         console.log(error);
        //     }
        // });
        //     fetch('https://localhost:3002/users', {
        //         data = { name: this.state.name, password: this.state.password, email: this.state.email },
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.parse({
        //             data

        //         })
        //     })
        // }
    }


    handleNameChange = (e) => this.setState({ name: e.target.value })
    handlePasswordChange = (e) => this.setState({ password: e.target.value })
    handleaEmailChange = (e) => this.setState({ email: e.target.value })

    render() {
        return (
            <form className="form bg-light text-dark">
                <h3>Register as a Carlet User!</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="username"
                        value={this.state.name}
                        ref={name => (this.inputName = name)}
                        onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        ref={password => (this.inputPassword = password)}
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
                        ref={email => (this.inputEmail = email)}
                        onChange={this.handleEmailChange} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={this.handleSubmit}> Register </button>
            </form>
        );
    }
}
