import React from 'react';
import './App.css';
// import { GiSoccerKick } from "react-icons/gi";
import Navbar from 'react-bootstrap/Navbar'


// const headercontainer = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
// }
// const flexitems = {
//     flexWrap: 'wrap',
// }

// const headerlogo = {

// }

// const styleheadline = {

//     // fontSize: "120%",
//     // padding: '0.2%',
//     // paddingLeft: "8%",


// }

// const stylelinks = {
//     // display: 'flex',
//     // alignSelf: 'stretch',
//     // justifyContent: 'right',
//     // paddingRight: '8%',
// }

function Header() {
    // return (

    //     <div style={headercontainer}>

    //         <div style={headerlogo}>
    //             <a > <GiSoccerKick /></a>
    //         </div>

    //         <div>
    //             <h2> Soccer League Germany</h2>
    //         </div>

    //         <div
    //             style={stylelinks}>
    //             <a> Soccer League</a>
    //             <a> Latest Results</a>
    //             <a> Virtual League</a>
    //             <a> DFL</a>
    //         </div>

    //     </div>

    // )

    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>

}

export default Header;
