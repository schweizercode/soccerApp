import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  state = {
    loading: true,
    teams: []
    // strAlternate: { ''}
  };

  async componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
      .then(response => response.json())
      .then(data => console.log(data));
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



// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLoading: true,
//       dataSource: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Germany')
//       .then(response => response.json())
//       .then((responseJson) => {
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson
//         })
//       })

//   }

//   renderItem = ({ item, index }) => {
//     return (
//       <View style={styles.item}>
//         <Text>Hello</Text>
//       </View>
//     )
//   }

//   render() {
//     let { container } = styles
//     let { dataSource, isLoading } = this.state
//     return (
//       <view style={container}>
//         <FlatList
//           data={dataSource}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </view>
//     )
//   }
// }

