import React, { Component } from "react";

export default class User extends Component {




    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={this.props.user.name}
                        src={this.props.user.avatar}
                    />
                    <div className="card-body">
                        <h5 className="card-title ">
                            {`${this.props.user.name} ${
                                this.props.user.regDate
                                }`}
                        </h5>
                        <p key="email">
                            <span> {this.props.user.email}</span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <div
                            className="btn-group d-flex btn-group-justified"
                            role="group"
                            aria-label="..."
                        >
                            <button type="button" className={"btn btn-info w-100"}>
                                {" Message User"}
                            </button>
                            <button type="button" className={"btn btn-primary w-100"}>
                                {" View User Profile "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}