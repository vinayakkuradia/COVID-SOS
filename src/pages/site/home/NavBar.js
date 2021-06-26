import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand className="m-auto" id="logo" href="#home">
						COVID SOS Portal
					</Navbar.Brand>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto text-center">
							<NavLink exact className="nav-link" to="/">
								Home
							</NavLink>
							<NavLink exact className="nav-link" to="/about/">
								About
							</NavLink>
							<NavLink exact className="nav-link" to="/login/">
								Login
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavBar;
