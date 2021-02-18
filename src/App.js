import React, { Component } from 'react';
import './App.css';


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
      <table>
        <th> Teams</th>
        {this.state.teams.map(team => (
          <tr>{team.strTeam} <img src={team.strTeamBadge} alt="Icon"></img></tr>

        ))
        }
      </table >
    );
  }

}
