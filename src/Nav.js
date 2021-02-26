import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

function Nav() {
    return (
        <nav>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/teams/">Club Overview</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="Descriptions">Descriptions</ReactBootStrap.Nav.Link>

                        <ReactBootStrap.Nav.Link eventKey={2} href="LiveChat"> Live Chat</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>

                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#chat">Contact</ReactBootStrap.Nav.Link>

                        <ReactBootStrap.DropdownButton menuAlign="right" title="User" id="dropdown-menu-align-right">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">My Account</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Log out</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.DropdownButton>

                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </nav>
    )
}

export default Nav;


