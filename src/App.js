import React from "react";
import {
	BrowserRouter as Router,
	hashHistory as history,
	Switch
} from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>{Routes}</Switch>
			</Router>
		</div>
	);
}

export default App;
