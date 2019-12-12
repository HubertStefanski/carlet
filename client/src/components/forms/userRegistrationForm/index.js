import React, { Component } from 'react';
import * as api from '../../../api';
import user from '../../users/user';


export default class userRegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }






    handleSubmit = (e) => {
        // e.preventDefault();
        // let name = this.state.name
        // let password = this.state.password
        // let email = this.state.email;
        // let avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr26bSq73SpFK60rQkfJ8VEiJENQFSSm73cA8dVKO59wq8Kt7s";
        // let regDate = Date.now();
        // let userRating = 0;
        // let ownedCar = 'empty';
        // if (!name || !password || !email) {

        //     console.log("fields are not properly filled")
        //     return;
        // }
        // console.log(this.props.state);
        // // this.props.addUser(name, password, email,avatar,regDate,userRating,ownedCar);
        // // this.setState({ name: name, password: password, avatar: avatar, regDate: regDate, email: email, userRating:userRating, ownedCar: ownedCar });

        // // var data = { name: this.state.name, password: this.state.password, email: this.state.email };
        // // var toJSON = JSON.stringify(this.props.state);
        // // api.addUser(this.state.name, this.state.password, this.state.regDate, this.state.email);
        // api.addUser(this.props.state).then(resp => {
        //     const newUser = { "name": this.state.name, "password": this.state.password, "avatar": this.state.avatar, "regDate": this.state.regDate, "email": this.state.email, "userRating": this.state.userRating, "ownedCar": this.state.ownedCar };
        // })
        // this.setState({ name: '', password: '', avatar: '', regDate: '', email: '', userRating: '', ownedCar: '' });

    };

    handleSubmit = (e) => {
        e.preventDefault();

        api.addUser(this.state.name, this.state.password, this.state.email, this.state.avatar, this.state.regDate, this.state.userRating, this.state.ownedCar)
            .then(resp => {
                const newUser = { "name": this.state.name, "password": this.state.password, "email": this.state.email, "avatar": this.state.avatar, "regDate": this.state.regDate, "userRating": 0, "ownedCars": "" };
            })

        this.setState({ name: '', password: '', avatar: '', regDate: '', email: '', userRating: '', ownedCar: '' });

    }



    handleNameChange = (e) => this.setState({ name: e.target.value });
    handlePasswordChange = (e) => this.setState({ password: e.target.value });
    handleAvatarChange = (e) => this.setState({avatar: e.target.value});
    handleEmailChange = (e) => this.setState({ email: e.target.value });

    render() {
        return (
            <form className="form bg-light text-dark">
                <h3>Register as a Carlet User!</h3>
                <div className="form-group">
                    <input key="name" type="text"
                        className="form-control"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <input key="name" type="text"
                        className="form-control"
                        placeholder="Avatar (URL)"
                        value={this.state.avatar}
                        onChange={this.handleAvatarChange} />
                </div>
                <div className="form-group">
                    <input key="password" type="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />
                </div>
                <div className="form-group">
                    <input type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="form-group">
                    <input key="email" type="email"
                        className="form-control"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange} />
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={this.handleSubmit}> Register  </button>
            </form>
        );
    }
}
