import React from "react";
import "./Navbar.css";
import logo from "../components/assests/logo.png"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/');
    }
    return (
        <div className="navbar-container">
            <div className="leftSide" onClick={clickHandler}>
                <img src={logo} className="leftLogo" alt="logo" />
                <span id="header">Health Care</span>
            </div>
            <div className="rightSide">
                <Link to="/" className="about">Home</Link>
                <Link to="/" className="about">Find Item</Link>
                <Link to="/loginList" className="about">Log In</Link>
                <Link to="/signupList" className="about">Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;