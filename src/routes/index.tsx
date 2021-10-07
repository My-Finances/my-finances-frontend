import React from "react";

import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "~/pages/Home";

import Auth from "~/pages/Auth";

function Routes({ children }: any) {
  return (
    <Switch>
      <Route path="/" component={Auth} exact>
        {children}
      </Route>
      <Route path="/home" component={Home} exact isPrivate>
        {children}
      </Route>
    </Switch>
  );
}
export default Routes;
