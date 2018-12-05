import React from "react";
import Logo from "../imgs/capozio_logo.png";

const NavBar = () => {
  return (
    <nav className="navbar background-red is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="http://www.capozios.com" >
        <img src={Logo}  height="50" alt = "capozio's-logo"/>
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href=''>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start" href=''>
        <a className="navbar-item">
            Home
        </a>

        <a className="navbar-item" href=''>
            Option 1
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href=''>
            dropdown
            </a>

            <div className="navbar-dropdown">
            <a className="navbar-item" href=''>
                About
            </a>
            <a className="navbar-item" href=''>
                Options
            </a>
            <a className="navbar-item" href=''>
                Contact
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href=''>
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <a className="button is-light" href=''>
                Orders
            </a>
            <a className="button is-light" href=''>
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>

    // <nav className="level">
    //   <p className="level-item has-text-centered">
    //     <a className="link is-info">Home</a>
    //   </p>
    //   <p className="level-item has-text-centered">
    //     <a className="link is-info">Menu</a>
    //   </p>
    //   <p className="level-item has-text-centered">
    //     <img src={Logo} alt="capozio-logo" width="300" height="50" />
    //   </p>
    //   <p className="level-item has-text-centered">
    //     <a className="link is-info">Reservations</a>
    //   </p>
    //   <p className="level-item has-text-centered">
    //     <a className="link is-info">Contact</a>
    //   </p>
    // </nav>
  );
};

export default NavBar;
