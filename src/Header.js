import React from 'react';
import './App.css';
import { GiSoccerKick } from "react-icons/gi";
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav, Form, FormControl } from 'react-bootstrap'



// function Header() {
//     return (

//         <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home"><GiSoccerKick /></Navbar.Brand>
//             <Navbar.Brand href="/teams/">Soccer League Germany</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link href="#home">Soccer League</Nav.Link>
//                     <Nav.Link href="#link">Latest Results</Nav.Link>
//                     <Nav.Link href="#link">Virtual League</Nav.Link>
//                     <Nav.Link href="#link">DFL</Nav.Link>

//                 </Nav>
//                 <Form inline>
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }



function Header() {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><GiSoccerKick /></Navbar.Brand>
            <Navbar.Brand href="/teams/">Soccer League Germany</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Soccer League</Nav.Link>
                    <Nav.Link href="#link">Latest Results</Nav.Link>
                    <Nav.Link href="#link">Virtual League</Nav.Link>
                    <Nav.Link href="#link">DFL</Nav.Link>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
