import React from "react";
import { Route, Switch } from "react-router";
import Site from "./pages/site";
import UserPortal from "./pages/userportal";

export default (
	<Switch>
		<Route exact path="/" component={Site.Home} />
		<Route exact path="/about/" component={Site.About} />
		<Route exact path="/login/" component={Site.Login} />
		<Route exact path="/u/dashboard/" component={UserPortal.Dashboard} />
		<Route exact path="/u/profile/" component={UserPortal.Profile} />
		<Route exact path="/u/profile/edit/" component={UserPortal.EditProfile} />
	</Switch>
);
