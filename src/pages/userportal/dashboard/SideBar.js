import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
	render() {
		return (
			<div className="col-xl-2 col-md-3 col-12 d-flex flex-column">
				<Navbar bg="light" variant="light">
					<Container fluid>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<NavLink exact className="nav-link" to="/">
									Home
								</NavLink>
								<NavLink exact className="nav-link" to="/about/">
									About
								</NavLink>
								{/*<Link exact className="dropdown-item" to="/Signout/">
									Signout
								</Link>*/}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default SideBar;
