import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'



function Header() {
    return (

        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="#home"><GiSoccerKick /></Navbar.Brand>
            <Navbar.Brand href="/teams/">Soccer League Germany</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto" style={{ textAlign: 'right' }}>
                    <Nav.Link href="leaguetable">League Table</Nav.Link>
                    <Nav.Link href="latestresults">Latest Results</Nav.Link>
                    <Nav.Link href="#link">Virtual League</Nav.Link>
                    <Nav.Link href="#link">DFL</Nav.Link>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;
