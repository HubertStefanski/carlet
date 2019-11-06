import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
            <Fragment>
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
                                        <NavItem><Link to="/rentals/listings" href="/rentals/listings">listings</Link></NavItem>
                                        <NavItem><Link to="/rentals/userListings" href="/rentals/userListings">Your Listings</Link></NavItem>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Information"
                                        onMouseEnter={this.handleOpen}
                                        onMouseLeave={this.handleClose}
                                        open={this.state.isOpen}
                                        noCaret
                                        id="language-switcher-container"
                                    >
                                        <NavItem><Link to="/info/faq">Frequently asked Questions</Link></NavItem>
                                        <NavItem><Link to="/info/tnc">Terms And Conditions</Link></NavItem>
                                    </NavDropdown>
                                    <NavItem eventkey={2} href="/login"><Link to="/login/">Login</Link></NavItem>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </Router >
            </Fragment>
        );
    }
}

ReactDOM.render(<Router />, document.getElementById("root"));