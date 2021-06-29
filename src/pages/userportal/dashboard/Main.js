import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

class Main extends React.Component {
	render() {
		return (
			<main className="col-xl-8 col-md-9 col-12">
				<Jumbotron>
					<Container>
						<h3>Requirements</h3>
					</Container>
				</Jumbotron>
			</main>
		);
	}
}

export default Main;
