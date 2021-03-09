import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";
import Navbar from 'react-bootstrap/Navbar'


function Header() {
    return (

        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="#home"><GiSoccerKick /></Navbar.Brand>
            <Navbar.Brand href="/Cluboverview/">Soccer League Germany</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
