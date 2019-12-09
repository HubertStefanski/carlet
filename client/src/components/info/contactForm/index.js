import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ContactForm extends Component {
    state = { email: '', text: '' };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //      this.props.handleAdd(this.state.name, this.state.password, this.state.email)
    //     this.setState({ email: email, text: text });
    //     var toJSON = JSON.stringify(`{${this.props.state}}`)
    //     console.log(toJSON);
    // request.post("http://localhost:3002/user").end((error, res) => {
    //     if (res) {
    //         let data = toJSON;
    //         this.setState({ data });
    //     } else {
    //         console.log(error);
    //     }
    //});



    handleEmailChange = (e) => this.setState({ email: e.target.value });
    handleTextChange = (e) => this.setState({ textj: e.target.value });

    render() {
        return (
            <form className="form bg-light text-dark">
                <h3>Send us a question!</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="query"
                        value={this.state.text}
                        onChange={this.handleTextChange} />
                </div>

                <button type="submit" className="btn btn-primary"
                    onClick={this.handleSubmit}> Send </button>
            </form>
        );
    }

}
export default withRouter(ContactForm)