import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
=======
import "./App.css";
>>>>>>> master

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
