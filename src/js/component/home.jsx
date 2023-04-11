import React from "react";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Card from "./Card/Card.jsx";
import Footer from "./Footer/Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar/>
			<Jumbotron/>
			<div class="row row-cols-6 container-fluid">
        		<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
};
export default Home;
