import Header from './Header.js'
import Nav from './Nav.js';
import Cluboverview from './Cluboverview.js';
import Description from './Description.js';
import { SoccerContextProvider } from './context/soccercontext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import Profile from './components/auth/Profile';
import { AuthProvider } from './context/authContext';
import { Container } from 'react-bootstrap';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


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
                  <Route path="/Register" component={Register} />
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


