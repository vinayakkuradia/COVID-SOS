import React from "react";
import Components from "../components";
import LoginForm from "./LoginForm";

class Login extends React.Component {
	render() {
		return (
			<>
				<Components.NavBar />
				<LoginForm />
			</>
		);
	}
}

export default Login;
