import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    loading: true,
    teams: []
    // strAlternate: { ''}
  };

  async componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
      .then(response => response.json())
      .then(data => console.log(data));
    // console.log(data.teams[0].strountry)
  }


  render() {

    if (this.state.loading) {
      return <div>Loading..</div>;
    }

    if (!this.state.teams.length) {
      return <div>didn't get a team</div>;
    }

    return (
      <div>
        <div>{this.state.teams.name.title}</div>
        <div>{this.state.teams.name.title}</div>
      </div>
    );
  }

}

// export default App;
