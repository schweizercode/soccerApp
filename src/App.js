import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Teamlist from './Teamlist.js';
import Description from './Description.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
  state = {
    teams: []
  };

  async componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
      .then(response => response.json())
      .then(data => {
        console.log(data.teams)
        this.setState({ teams: data.teams })
      });
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>

            <Route exact path="/teams">
              <Teamlist teams={this.state.teams} />
            </Route>
            {/* 6 add a url link when clicking on a character and define a route handling the name as URL parameter */}
            <Route exact path="/teams/:idTeam">

              <Description />
            </Route>
          </Switch>
        </Router>
      </div >
    );
  }

}

