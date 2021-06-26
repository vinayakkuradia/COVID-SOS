import React from "react";
import { Jumbotron } from "react-bootstrap";

class Hero extends React.Component {
	render() {
		return (
			<Jumbotron className="jumbotron-fluid hero">
				<div className="container">
					<div className="row justify-content-center"></div>
				</div>
			</Jumbotron>
		);
	}
}

export default Hero;
