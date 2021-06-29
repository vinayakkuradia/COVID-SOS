import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Components from "../components";
import Content from "./Content";

class Benefactor extends React.Component {
	render() {
		return (
			<>
				<Components.NavBar />
				<Content />
			</>
		);
	}
}

export default Benefactor;
