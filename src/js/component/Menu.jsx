import React from "react";
import "/workspace/react-hello/src/styles/index.css"

const MenuNav = () => {
    return (
        <nav className = "navbar navbar-expand-lg bg-dark padding-navbar">
          <div className = "container-fluid">
            <a className = "navbar-brand text-light bg-dark px-5" href="#">Navbar</a>
            <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className = "navbar-toggler-icon"></span>
            </button>
            <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className = "navbar-nav ms-auto padding-navbar-menu">
                <a className = "nav-link active text-light bg-dark" aria-current="page" href="#">Home</a>
                <a className = "nav-link text-light bg-dark" href="#">Features</a>
                <a className = "nav-link text-light bg-dark" href="#">Pricing</a>
                <a className = "nav-link disabled ">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default MenuNav;