import React from "react";
import "./Card.css"

const Card = () => {
	return (
            
            <div id="Card" className="card card-body container-fluid px-3 justify-content-center">
                <img src="https://sindical.cl/wp-content/themes/megnet/images/demo/main-square.jpg" class="card-img-top" alt="..."></img>
                <h5 className="card-title fs-3">Card title</h5>
                <p className="card-text lh-sm p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis architecto modi sunt explicabo. Quia, quo itaque nulla facere, vero architecto provident, voluptas repellendus voluptatibus maxime cumque impedit sint ipsa alias!</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
       
        );
};

export default Card;