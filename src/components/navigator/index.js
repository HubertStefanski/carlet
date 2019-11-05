import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../home/index.js';
import Listings from '../rentals/listings/';
import UserListings from '../rentals/listings';
import Faq from '../info/faq/';
import Tnc from '../info/tnc';
import './navstyle.css';

export default class Nagivator extends Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <Navbar.Brand as={Link} to="/" >Carlet</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                <NavItem eventkey={1} href="/">
                                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                </NavItem>
                                <NavDropdown
                                    title="Rentals"
                                    onMouseEnter={this.handleOpen}
                                    onMouseLeave={this.handleClose}
                                    open={this.state.isOpen}
                                    noCaret
                                    id="language-switcher-container"
                                >
                                    <NavItem><Link to="/rentals/listings">listings</Link></NavItem>
                                    <NavItem><Link to="/rentals/userListings">Your Listings</Link></NavItem>
                                </NavDropdown>
                                <NavDropdown
                                    title="Rentals"
                                    onMouseEnter={this.handleOpen}
                                    onMouseLeave={this.handleClose}
                                    open={this.state.isOpen}
                                    noCaret
                                    id="language-switcher-container"
                                >
                                    <NavItem><Link to="/info/faq">Frequently asked Questions</Link></NavItem>
                                    <NavItem><Link to="/info/tnc">Terms And Conditions</Link></NavItem>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" Component={Home} />
                        <Route path="rentals/listings" component={Listings} />
                        <Route path="rentals/userListings" component={UserListings} />
                        <Route path="info/faq" component={Faq} />
                        <Route path="info/tnc" component={Tnc} />
                    </Switch>
                </div>
            </Router >
        );
    }
}
