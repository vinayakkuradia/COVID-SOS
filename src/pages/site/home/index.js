import React from "react";
import Instructions from "./Instructions";
import Counts from "./Counts";
import Hero from "./Hero";
import FAQs from "./FAQs";
import Components from "../components";
import "./home.css";

const Home = () => {
	return (
		<>
			<Components.NavBar />
			<Hero />
			<Counts />
			<Instructions />
			<FAQs />
			<Components.Footer />
		</>
	);
};

export default Home;
