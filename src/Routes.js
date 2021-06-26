import React from "react";
import { Route, Switch } from "react-router";
import Site from "./pages/site";

export default (
	<Switch>
		<Route exact path="/" component={Site.Home} />
		<Route exact path="/about" component={Site.About} />
		<Route exact path="/login" component={Site.Login} />
		<Route exact path="/p/user/create/" component={undefined} />
		<Route exact path="/p/user/update/:username/" component={undefined} />
		<Route exact path="/p/user/:username/" component={undefined} />
	</Switch>
);
