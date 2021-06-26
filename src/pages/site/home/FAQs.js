import React from "react";
import { Accordion, Card, Row, Jumbotron } from "react-bootstrap";

class FAQs extends React.Component {
	render() {
		return (
			<Jumbotron className="jumbotron-faqs">
				<Row className="offset-1">
					<div className="col-12 mb-2">
						<h3>Frequently Asked Questions (FAQs)</h3>
					</div>
					<div className="col-12 col-lg-5 col-md-7">
						<Accordion className="list-group list-group-flush">
							<div className="list-group-item">
								<Accordion.Toggle as={Card.Subtitle} eventKey="0">
									Some question?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>It's answer</Card.Body>
								</Accordion.Collapse>
							</div>
							<div className="list-group-item">
								<Accordion.Toggle as={Card.Subtitle} eventKey="1">
									Some other question?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>Just another answer</Card.Body>
								</Accordion.Collapse>
							</div>
							<div className="list-group-item">
								<Accordion.Toggle as={Card.Subtitle} eventKey="3">
									Some other other question?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>It's answer</Card.Body>
								</Accordion.Collapse>
							</div>
							<div className="list-group-item">
								<Accordion.Toggle as={Card.Subtitle} eventKey="4">
									Some extra question?
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>Just another answer</Card.Body>
								</Accordion.Collapse>
							</div>
						</Accordion>
					</div>
					<div></div>
				</Row>
			</Jumbotron>
		);
	}
}

export default FAQs;
