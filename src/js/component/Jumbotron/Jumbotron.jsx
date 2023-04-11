import React from "react";
import "./Jumbotron.css"

//create your first component
const Jumbotron = () => {
	return (
		<div className="text">
			<div className="container-fluid py-5 mx-auto ">
				
        		<h1 className="display-1 fw-semibold">A Warm Welcome!!</h1>
        		<p className="fs-6 lh-sm pt-2 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta facilis, laudantium vel aut ipsa voluptas laboriosam atque! Cumque eos eaque, 
				hic repudiandae incidunt dicta rem officia ex architecto cupiditate!
				</p>
        		<button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
				</div>
      		</div>
		
	);
};
export default Jumbotron;