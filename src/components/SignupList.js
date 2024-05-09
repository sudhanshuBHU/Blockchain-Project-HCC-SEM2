import React from "react";
import "./SignupList.css";
import { Link } from "react-router-dom";

const SignupList = () => {
    return (
        <div className="loginList-container">
            <div className="inner-container">
                <span id="content-loginList">Sign Up as</span>
                <Link to="/signDoctor" className="about" id="loginList">Doctor</Link>
                <Link to="/signPatient" className="about" id="loginList">Patient</Link>
                <Link to="/signPathologist" className="about" id="loginList">Pathologist</Link>
                <Link to="/signManufacturer" className="about" id="loginList">Manufacturer</Link>
            </div>
        </div>
    );
}

export default SignupList;