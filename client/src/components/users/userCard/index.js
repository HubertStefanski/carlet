
import React, { Component } from "react";
import User from "../user/";
import './user.css';


export default class userCard extends Component {
    render(){
        let fromArray = Array.from(this.props.user)
        const cards = fromArray.map(u =>(
            <User key={u.name} user={u} />
        ));
        return(
            <div className="container-fluid users bg-info">
                <div className="row">{cards}</div>
            </div>
        );  
    }
}