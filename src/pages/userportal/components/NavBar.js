import React from "react";
import { Navbar, NavDropdown, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "Vinayak Kuradia"
		};
	}
	render() {
		return (
			<Navbar id="dashboard" collapseOnSelect bg="light" variant="light">
				<Container fluid>
					<Link
						to="/u/dashboard/"
						className="mr-auto navbar-brand"
						id="dblogo">
						Dashboard
					</Link>
					<div className="ml-auto text-center navbar-nav">
						<Link to="/u/profile/" className="nav-link active">
							Vinayak Kuradia
						</Link>
						<Dropdown>
							<Dropdown.Toggle
								split
								variant="light"
								className="nav-link"
							/>
							<Dropdown.Menu className="inside" variant>
								<Link to="/u/profile/edit/" className="dropdown-item">
									Edit Profile
								</Link>
								<Link to="/u/settings/" className="dropdown-item">
									Settings
								</Link>
								<NavDropdown.Divider />
								<Link className="dropdown-item">Logout</Link>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</Container>
			</Navbar>
		);
	}
}

export default NavBar;
