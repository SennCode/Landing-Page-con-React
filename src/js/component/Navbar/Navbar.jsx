import React from "react";


const Navbar = () => {
	return (
        <div>
            <nav class="navbar navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Start Bootstrap</a>
                    <div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
	);
};
export default Navbar;