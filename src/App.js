import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import About from './About';
import description from './description';


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
        <Nav />
        <About />
        <description />

        {/* <Layout>
          <Switch>
            <Route path="/" compomnent={ } />
            <Route path=""
          </Switch>
        </Layout> */}
      </div >
    );
  }

}

