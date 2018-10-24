import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
