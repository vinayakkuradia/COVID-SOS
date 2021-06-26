import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Holder from "holderjs";
import NavBar from "../home/NavBar";
import Footer from "../home/Footer";
// Remove it when you'll embed a suitable image
let corona = "holder.js/700x400?text=Corona Count&bg=373940";

// Two components #NavBar and #Footer are added
// You can comment them during trial if you want

class About extends React.Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container profile">
					<form method="">
						<div className="row">
							<div className="col-md-4">
								<img src={corona} alt="corona" />
							</div>
							<div className="col-md-6">
								<div className="profile-head">
									<h5> Team 12</h5>
									<h6> </h6>
								</div>
							</div>
						</div>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default About;
