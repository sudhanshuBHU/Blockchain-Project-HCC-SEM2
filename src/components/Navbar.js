import React from "react";
import "./Navbar.css";
import logo from "../components/assests/logo.png"
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="leftSide">
                <img src={logo} className="leftLogo" alt="logo" />
                <span id="header">Health Care</span>
            </div>
            <div className="rightSide">
                <div className="about">Find Item</div>
                <div className="about">Sign In</div>
                <div className="about">Sign Up</div>
            </div>
        </div>
    );
}

export default Navbar;