import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// below two libraries are required for user checking
import firebase from "firebase/app";
import "firebase/auth";
import "./NavBar.css";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
		// following code checks if user logged in //
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: user
				});
			} else {
				// window.location="/login"
				// uncomment above in other components where user is required
				//  not here or the component will load itself infinitely
			}
			//
		});
	}

	logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				this.setState({
					user: null
				});
			})
			.catch((error) => {
				console.log(error);
			});
		return true;
	};

	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand className="m-auto" id="mainlogo" href="#home">
						COVID SOS Portal
					</Navbar.Brand>
					<Navbar.Collapse>
						<Nav className="ml-auto text-center">
							<NavLink exact className="nav-link" to="/">
								Home
							</NavLink>
							<NavLink exact className="nav-link" to="/about/">
								About
							</NavLink>
							{this.state.user ? (
								<>
									<NavLink exact className="nav-link" to="/dashboard/">
										Dashboard
									</NavLink>
									<NavLink
										exact
										className="nav-link"
										to="/"
										onClick={this.logout}>
										Logout
									</NavLink>
								</>
							) : (
								<NavLink exact className="nav-link" to="/login/">
									Login
								</NavLink>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavBar;
