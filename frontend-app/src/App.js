import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing/landing.view";
import ListRoom from "./components/listRoom/listRoom.view";
import LoginPage from './pages/login/login.view';
import Terminos from './pages/terminos/terminos';
import Politica from './pages/politica/politica';


function App() {
    return (
      <div>
        <Router>
        

          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/loginpage">
              <LoginPage />
            </Route>
            <Route exact path="/terminos">
              <Terminos />
            </Route>
            <Route exact path="/politica">
              <Politica />
            </Route>

            <Route exact path="/habitaciones">
              <ListRoom />
            </Route>
          </Switch>

        </Router>
      </div>
  );
}

export default App;
