import React, { Component } from 'react';
import './App.css';
import './navbar.js';
import * as ReactBootStrap from 'react-bootstrap';

export default class App extends Component {
  state = {
    // loading: true,
    teams: []
    // strAlternate: {''}
  };

  async componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
      .then(response => response.json())
      .then(data => {
        console.log(data.teams)
        this.setState({ teams: data.teams })
      });
    //  .then(data => console.log(data.teams[1].strTeam));
  }


  render() {

    // if (this.state.loading) {
    //   return <div>Loading..</div>;
    // }

    // if (!this.state.teams.length) {
    //   return <div>didn't get a team</div>;
    // }

    return (
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home">Soccer Teams</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="#chat">
                Chat
      </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

        <list class="list">
          <h1> Teams</h1>
          {this.state.teams.map(team => (
            <ol><img class="Icon" src={team.strTeamBadge} alt="Icon"></img>{team.strTeam} </ol>

          ))
          }
        </list >
      </div>
    );
  }

}

