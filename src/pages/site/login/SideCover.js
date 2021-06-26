import React from "react";
import Holder from "holderjs";

class SideCover extends React.Component {
	render() {
		return (
			<div className="col-auto mr-auto w-50">
				<img
					className="img-fluid"
					src="holder.js/970x900?text=FightCovid&bg=373940"
					alt="fightcovid"
				/>
			</div>
		);
	}
}

export default SideCover;
