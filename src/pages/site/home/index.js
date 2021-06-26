import React from "react";
import NavBar from "./NavBar";
import Instructions from "./Instructions";
import Footer from "./Footer";
import Counts from "./Counts";
import Hero from "./Hero";
import FAQs from "./FAQs";
import "./home.css";

const Home = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<Counts />
			<Instructions />
			<FAQs />
			<Footer />
		</>
	);
};

export default Home;
