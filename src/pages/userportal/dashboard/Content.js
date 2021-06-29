import React from "react";
import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import Main from "./Main";

class Content extends React.Component {
	render() {
		return (
			<Container fluid>
				<div className="flex-xl-nowrap row">
					<SideBar />
					<Main />
				</div>
			</Container>
		);
	}
}

export default Content;
