import React from "react";
import Components from "../components";
import DetailForm from "./DetailForm";

class EditProfile extends React.Component {
	render() {
		return (
			<>
				<Components.NavBar />
				<DetailForm />
			</>
		);
	}
}

export default EditProfile;
