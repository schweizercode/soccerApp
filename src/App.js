import Header from './Header.js'
import Nav from './Nav.js';
import Cluboverview from './Cluboverview.js';
import Description from './Description.js';
import { SoccerContextProvider } from './context/soccercontext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
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
              <Route exact path="/"> </Route>
              <Route exact path="/Cluboverview">
                <Cluboverview />
              </Route>

              <Route exact path="/Teams/:idTeam">
                <Description />
              </Route>
              <Container
                className="d-flex align-items-center justify-content-center" style={{ minHeight: "75vh" }}>
                <div
                  className="w-100" styles={{ maxWidth: "400px" }}>
                  <Route path="/Register" component={Register} />
                  <Route path="/Login" component={Login} />
                </div>
              </Container>


            </Switch>

          </div >
        </SoccerContextProvider>
      </AuthContextProvider>
    </Router>
  );
}


export default App;


