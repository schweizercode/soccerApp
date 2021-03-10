import React from 'react'
import Header from '../Header.js'
import Nav from '../Nav.js';
import Cluboverview from '../Cluboverview.js';
import Description from '../Description.js';
import { SoccerContextProvider } from '../context/soccercontext';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';
import { AuthProvider } from '../context/authContext';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


const App = () => {

  return (

    <Router>
      <AuthProvider>
        <SoccerContextProvider>
          <div className="App">
            <Header />
            <Nav />

            <Switch>
              <Route exact path="/">
                <Cluboverview />
              </Route>
              <Route path="/Cluboverview">
                <Cluboverview />
              </Route>

              <Route exact path="/Teams/:idTeam">
                <Description />
              </Route>
              <Container
                className="d-flex align-items-center justify-content-center" style={{ minHeight: "55vh", maxWidth: "500px" }}>
                <div
                  className="w-100">
                  <Route path="/Register" component={Signup} />
                  <Route path="/Login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                  <Route path="/Profile" component={Profile} />
                </div>
              </Container>
            </Switch>

          </div >
        </SoccerContextProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;


