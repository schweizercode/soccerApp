import React from 'react'
import Header from './Header.js'
import Nav from './Nav.js';
import Cluboverview from './Cluboverview.js';
import Description from './Description.js';
import { SoccerContextProvider } from './context/soccercontext';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import UpdateProfile from "./components/UpdateProfile"
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './context/authContext';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ChatContextProvider } from './context/chatcontext.js';


const App = () => {

  return (

    <Router>
      <AuthProvider>
        <SoccerContextProvider>
          <ChatContextProvider>
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
                    <Route path="/Profile" component={Profile} />
                    <Route path="/update-profile" component={UpdateProfile} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />

                  </div>
                </Container>
              </Switch>

            </div >
          </ChatContextProvider>
        </SoccerContextProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;


