import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './navstyle.css';
import Home from '../home/';
import Listings from '../rentals/listings/';
import UserListings from '../rentals/listings/';
import Faq from '../info/faq/';
import Tnc from '../info/tnc/';
import LoginPage from '../loginPage/';
import UsersPage from '../users/usersPage/';
import RegisterUser from '../users/registerUser';
import ContactForm from '../info/contactForm';
import UserProfile from '../users/userProfile';





export default class Navigator extends Component {


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
            <div>
                <Router>

                    <Navbar>
                        <Navbar.Brand as={Link} to="/home" >Carlet</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                <NavItem>
                                    <NavDropdown
                                        title="Rentals"
                                        onMouseEnter={this.handleOpen}
                                        onMouseLeave={this.handleClose}
                                        open={this.state.isOpen}
                                        
                                        id="language-switcher-container"
                                    >
                                        <NavItem><Link to="/rentals/listings">listings</Link></NavItem>
                                        <NavItem><Link to="/rentals/userListings">Your Listings</Link></NavItem>
                                    </NavDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavDropdown
                                        title="Information"
                                        onMouseEnter={this.handleOpen}
                                        onMouseLeave={this.handleClose}
                                        open={this.state.isOpen}
                                        
                                        id="language-switcher-container"
                                    >
                                        <NavItem><Link to="/info/faq">Frequently asked Questions</Link></NavItem>
                                        <NavItem><Link to="/info/tnc">Terms And Conditions</Link></NavItem>
                                        <NavItem><Link to="/info/contact">Contact Us</Link></NavItem>
                                    </NavDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavDropdown
                                        title="User Management"
                                        onMouseEnter={this.handleOpen}
                                        onMouseLeave={this.handleClose}
                                        open={this.state.isOpen}
                                        
                                        id="language-switcher-container"
                                    >
                                        <NavItem><Link to="/users/usersPage/">Users </Link></NavItem>
                                        <NavItem><Link to="/users/registerUser/"> Register</Link> </NavItem>
                                        <NavItem><Link to="/login"> Login </Link></NavItem>
                                        <NavItem><Link to="/user/:id"> User Profile </Link></NavItem>
                        
                                        
                                    </NavDropdown>
                                </NavItem>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/rentals/listings" component={Listings} />
                        <Route path="/rentals/userListings" component={UserListings} />
                        <Route path="/info/faq" component={Faq} />
                        <Route path="/info/tnc" component={Tnc} />
                        <Route path="/info/contact" component={ContactForm} />
                        <Route path="/users/usersPage" component={UsersPage} />
                        <Route path="/users/registerUser" component={RegisterUser} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/users/:id" component={UserProfile} />

                    </Switch>
                </Router >
            </div >
        );
    }
}

ReactDOM.render(Navigator, document.getElementById("root"));