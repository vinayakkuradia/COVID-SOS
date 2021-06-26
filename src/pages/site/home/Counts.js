import React from "react";
import { Jumbotron } from "react-bootstrap";

class Counts extends React.Component {
	render() {
		return (
			<Jumbotron className="jumbotron-fluid jumbotron-counts">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-6 align-self-center">
							<h3>Something here!</h3>
						</div>
						<div className="col-6 align-self-center">
							<h3>Something Here too!</h3>
						</div>
					</div>
				</div>
			</Jumbotron>
		);
	}
}

export default Counts;
