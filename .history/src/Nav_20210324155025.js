import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { useAuth } from "./context/AuthContext"
import { ImUser } from 'react-icons/im'
import Login from './components/Login';

function Nav() {

    const { currentUser, } = useAuth()

    return (
        <nav>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: '3%', }}>
                <ReactBootStrap.Navbar.Brand href="/Cluboverview">Club Overview</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

                    {/* <ReactBootStrap.Nav className="mr-auto" style={{ paddingLeft: '2%', }}>
                        <ReactBootStrap.Nav.Link eventKey={2} href="/chat">Chat</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav> */}

                    <ReactBootStrap.Nav className="mr-auto" style={{ paddingLeft: '1%', }}>
                        {currentUser && <ReactBootStrap.Nav.Link href="/profile">Loged in User:{currentUser.email}</ReactBootStrap.Nav.Link>}
                    </ReactBootStrap.Nav>

                    <ReactBootStrap.Nav className="mr-auto" style={{ marginRight: '2%', }}>
                        <ReactBootStrap.Navbar.Brand href="/Login"><ImUser></ImUser></ReactBootStrap.Navbar.Brand >
                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </nav>
    )
}

export default Nav;


