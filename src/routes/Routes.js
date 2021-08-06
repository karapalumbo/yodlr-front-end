import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "../Admin";
import Signup from "../forms/Signup";
import Login from "../forms/Login";
import Homepage from "../Homepage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/homepage">
        <Homepage />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/admin">
        <Admin />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
