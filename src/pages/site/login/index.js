import React from "react";
import NavBar from "../home/NavBar";
import LoginForm from "./LoginForm";

class Login extends React.Component {
	render() {
		return (
			<>
				<NavBar />
				<LoginForm />
			</>
		);
	}
}

export default Login;
