import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js'
import Teamlist from './Teamlist.js';
import Description from './Description.js';
import { SoccerContextProvider } from './context/soccercontext';
import Register from './components/auth/Register'
import { AuthContextProvider } from './context/authContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const App = () => {

  return (

    <Router>
      <AuthContextProvider>
        <SoccerContextProvider>
          <div className="App">
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/Register"><Register /></Route>
              <Route exact path="/teams">
                <Teamlist />
              </Route>
              {/* 6 add a url link when clicking on a character and define a route handling the name as URL parameter */}
              <Route exact path="/teams/:idTeam">

                <Description />

              </Route>
            </Switch>

          </div >
        </SoccerContextProvider>
      </AuthContextProvider>
    </Router>
  );
}


export default App;


