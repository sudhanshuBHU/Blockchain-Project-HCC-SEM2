import React from "react";
import "./LoginList.css";
import { Link } from "react-router-dom";
const LoginList = () => {
    return (
        <div className="loginList-container">
            <div className="inner-container">
                <span id="content-loginList">Log In as</span>
                <Link to="/logDoctor" className="about" id="loginList">Doctor</Link>
                <Link to="/logPatient" className="about" id="loginList">Patient</Link>
                <Link to="/logPathologist" className="about" id="loginList">Pathologist</Link>
                <Link to="/logManufacturer" className="about" id="loginList">Manufacturer</Link>
            </div>
        </div>
    );
}

export default LoginList;