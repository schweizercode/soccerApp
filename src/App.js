import Header from './Header.js'
import Nav from './Nav.js';
import Cluboverview from './Cluboverview.js';
import Description from './Description.js';
import { SoccerContextProvider } from './context/soccercontext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { AuthContextProvider } from './context/authContext';
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
      <AuthContextProvider>
        <SoccerContextProvider>
          <div className="App">
            <Header />
            <Nav />
            <Switch>

              <Route
                exact path="/">

                <Container
                  className="d-flex align-items-center justify-content-center" style={{ minHeight: "75vh" }}>

                  <div
                    className="w-100" styles={{ maxWidth: "400px" }}>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/login" component={Login}></Route>
                  </div>

                </Container>

              </Route>
              <Route exact path="/Cluboverview">
                <Cluboverview />
              </Route>

              <Route exact path="/Teams/:idTeam">
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


