import React from "react";
import {
	Container,
	Jumbotron,
	InputGroup,
	Form,
	Row,
	Col,
	Image,
	Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

class DetailForm extends React.Component {
	render() {
		return (
			<>
				<Container>
					<Jumbotron className="mt-4">
						<Form>
							<Row>
								<Col
									xs={6}
									md={4}
									className="text-center align-self-center">
									<Image
										fluid
										src="holder.js/230x230?text=Picture&bg=d2d6da"
										roundedCircle
									/>
								</Col>
								<Col>
									<Form.Row>
										<Form.Group
											as={Col}
											md="6"
											controlId="validationCustom01">
											<Form.Label>First name</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="First name"
											/>
											<Form.Control.Feedback>
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
										<Form.Group
											as={Col}
											md="6"
											controlId="validationCustom02">
											<Form.Label>Last name</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Last name"
											/>
											<Form.Control.Feedback>
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>

									<Form.Row>
										<Form.Group
											as={Col}
											md="8"
											controlId="validationCustomUsername">
											<Form.Label>Username</Form.Label>
											<InputGroup hasValidation>
												<InputGroup.Text id="inputGroupPrepend">
													@
												</InputGroup.Text>
												<Form.Control
													type="text"
													placeholder="Username"
													aria-describedby="inputGroupPrepend"
													required
												/>
												<Form.Control.Feedback type="invalid">
													Please choose a username.
												</Form.Control.Feedback>
											</InputGroup>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											as={Col}
											md="8"
											controlId="formGridPassword">
											<Form.Label>Password</Form.Label>
											<Link className="pwd ml-2">
												Change <i class="far fa-edit"></i>
											</Link>
											<Form.Control
												type="password"
												placeholder="*******"
												disabled
											/>
										</Form.Group>
									</Form.Row>
								</Col>
							</Row>
						</Form>
					</Jumbotron>

					<Jumbotron className="mt-4">
						<Form>
							<Form.Row>
								<Form.Group as={Col} md={5} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
									/>
								</Form.Group>

								<Form.Group as={Col} md={3} controlId="formGridDoB">
									<Form.Label>Date of Birth</Form.Label>
									<Form.Control type="date" />
								</Form.Group>

								<Form.Group as={Col} md={4} controlId="formGridUID">
									<Form.Label>Aadhar No.</Form.Label>
									<Form.Control
										type="text"
										placeholder="xxxx-xxxx-xxxx"
									/>
								</Form.Group>
							</Form.Row>
							{/*onKeyUp="this.value=this.value.replace(/[^\\d]/,'')"*/}
							<Form.Group controlId="formGridAddress1">
								<Form.Label>Address (House No. and Street)</Form.Label>
								<Form.Control placeholder="1234 Main St" />
							</Form.Group>

							<Form.Group controlId="formGridAddress2">
								<Form.Label>
									Address 2 (Area and Neighbourhood)
								</Form.Label>
								<Form.Control placeholder="Apartment, studio, or floor" />
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridZip">
									<Form.Label>PIN Code</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridCity">
									<Form.Label>City</Form.Label>
									<Form.Control placeholder="City" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridState">
									<Form.Label>State</Form.Label>
									<Form.Control as="select" defaultValue="Choose...">
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Form.Group>
							</Form.Row>

							<Button variant="dark" type="submit">
								Submit
							</Button>
						</Form>
					</Jumbotron>
				</Container>
			</>
		);
	}
}

export default DetailForm;
