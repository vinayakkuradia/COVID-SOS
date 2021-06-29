import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<Container className="container-fluid">
					<Row>
						<div className="col-4 offset-1 col-sm-3">
							<h5>Quick Links</h5>
							<ul className="list-unstyled">
								<li>
									<Link to="#">FAQs</Link>
								</li>
								<li>
									<Link to="#">Instructions</Link>
								</li>
								<li>
									<Link to="#">Do & Don'ts</Link>
								</li>
								<li>
									<Link to="#">Support</Link>
								</li>
							</ul>
						</div>

						<div className="col-4 col-sm-5">
							<h5>External Links</h5>
							<ul className="list-unstyled">
								<li>
									<Link to="#">State Govt. Guidelines</Link>
								</li>
								<li>
									<Link to="#">Central Govt. Guidelines</Link>
								</li>
								<li>
									<Link to="#">Health & Welfare Ministry</Link>
								</li>
								<li>
									<Link to="#">WHO Website</Link>
								</li>
							</ul>
						</div>

						<div className="col-12 col-sm-3">
							<h4 id="mainlogo" href="#home" className="text-center">
								COVID SOS Portal
							</h4>
							<div className="text-center">
								<a
									className="btn btn-social-icon btn-facebook"
									href="http://www.facebook.com/profile.php?id=">
									<i
										className="fab fa-facebook"
										aria-hidden="true"></i>
								</a>
								<a
									className="btn btn-social-icon btn-twitter"
									href="http://twitter.com/">
									<i className="fab fa-twitter"></i>
								</a>
								<a
									className="btn btn-social-icon btn-social-icon"
									href="mailto:">
									<i className="fas fa-envelope"></i>
								</a>
							</div>
						</div>
					</Row>

					<div className="row justify-content-center">
						<div className="col-auto">
							<p>© Copyright 2019 COVID SOS Portal</p>
						</div>
					</div>
				</Container>
			</footer>
		);
	}
}

export default Footer;
