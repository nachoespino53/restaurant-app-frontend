import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../imgs/capozio_logo.png";

const NavBar = () => {
  return (
    <nav className="navbar background-red is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <Link className="navbar-item" to="/" >
            <img src={Logo}  height="50" alt = "capozio's-logo"/>
        </Link>

        <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </div>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
        <Link className="navbar-item" to='/'>
            Home
        </Link>

        <Link className="navbar-item" to='/'>
            Option 1
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to='/'>
            dropdown
            </Link>

            <div className="navbar-dropdown">
            <Link className="navbar-item" to='/'>
                About
            </Link>
            <Link className="navbar-item" to='/'>
                Options
            </Link>
            <Link className="navbar-item" to='/'>
                Contact
            </Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item" to='/'>
                Report an issue
            </Link>
            </div>
        </div>
        </div>

        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <Link className="button is-light" to='/'>
                Orders
            </Link>
            <Link className="button is-light" to='/login'>
                Log in
            </Link>
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
