import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Signup from "./components/Signup";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
