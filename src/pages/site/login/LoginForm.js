import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import SideCover from "./SideCover";
import "./login.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let target = event.target;
		let nam = target.name;
		let val = target.value;
		this.setState({ [nam]: val });
	}

	handleSubmit(event) {
		alert("Requesting login for username: " + this.state.username);
		event.preventDefault();
	}

	render() {
		return (
			<>
				<Row className="no-gutters">
					<SideCover />
					<div className="col">
						<div className="jumbotron w-100 h-100">
							<div className="card px-5 px-sm-3 py-5">
								<div className="row row-content text-center justify-content-center">
									<div className="col-12 pb-2">
										<div className="card-title">
											<h1>Login</h1>
										</div>
									</div>

									<div className="col-12 col-lg-5 col-md-10">
										<Form onSubmit={this.handleSubmit}>
											<Form.Group controlId="loginUsername">
												<div className="col-12 py-1 pb-2">
													<Form.Control
														value={this.state.username}
														onChange={this.handleChange}
														type="text"
														placeholder="Username"
														name="username"
														required
													/>
													<Form.Control.Feedback type="invalid">
														Username is incorrect.
													</Form.Control.Feedback>
												</div>
											</Form.Group>

											<Form.Group controlId="loginPassword">
												<div className="col-12 py-1 pb-2">
													<Form.Control
														value={this.state.password}
														onChange={this.handleChange}
														type="password"
														placeholder="Password"
														name="password"
														required
													/>
													<Form.Control.Feedback type="invalid">
														Password is incorrect.
													</Form.Control.Feedback>
												</div>
											</Form.Group>

											<Form.Group>
												<div className="col-12">
													<Button variant="secondary" type="submit">
														Submit
													</Button>
												</div>
											</Form.Group>
										</Form>
									</div>
									<div className="col-12 py-1 text-center">
										<span>or sign in with</span>
									</div>
									<div className="col-12 py-1 text-center">
										<ul className="list-inline">
											<li className="list-inline-item px-2">
												<i className="fab fa-google fa-lg"></i>
											</li>
											<li className="list-inline-item px-2">
												<i className="fab fa-facebook fa-lg"></i>
											</li>
											<li className="list-inline-item px-2">
												<i className="fab fa-twitter fa-lg"></i>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Row>
			</>
		);
	}
}

export default LoginForm;
