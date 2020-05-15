import React, { Component }  from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Jumbotron } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="banner" height="600">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to="/home" >
                                <img src="./assets/images/creatorlogo.png" alt="creatorhub logo" width="80"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar className="CreatorHubNav" sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/home"><img src="/assets/images/creatorhublt.png" height="40" alt="creatorhub Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> YourSpace
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/market">
                                        <i className="fa fa-list fa-lg" /> marketplace
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blogpages">
                                        <i className="fa fa-info fa-lg" /> BlogPages
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;