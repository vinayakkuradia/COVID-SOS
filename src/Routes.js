import React from "react";
import { Route, Switch } from "react-router";
import Site from "./pages/site";
import UserPortal from "./pages/userportal";
import SOSPortal from "./pages/sosportal";
import Test from "./test";

export default (
  <Switch>
    <Route exact path="/" component={Site.Home} />
    <Route exact path="/about/" component={Site.About} />
    <Route exact path="/login/" component={Site.Login} />
    <Route exact path="/dashboard/" component={UserPortal.Dashboard} />
    <Route exact path="/profile/" component={UserPortal.Profile} />
    <Route exact path="/portal/:activity" component={SOSPortal.Portal} />
    <Route exact path="/search" component={SOSPortal.Search} />
    <Route exact path="/chat/:cuid" component={SOSPortal.Chat} />
    <Route exact path="/test" component={Test} />
  </Switch>
);
