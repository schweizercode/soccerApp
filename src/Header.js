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
        </Navbar>
    )
}

export default Header;
