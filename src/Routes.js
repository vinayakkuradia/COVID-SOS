import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/site/home";
import About from "./pages/site/about";
import Login from "./pages/site/login";

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/about" component={About} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/p/user/create/" component={undefined} />
		<Route exact path="/p/user/update/:username/" component={undefined} />
		<Route exact path="/p/user/:username/" component={undefined} />
	</Switch>
);
