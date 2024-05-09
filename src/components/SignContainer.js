import React from "react";
import "./SignContainer.css";
import { Link } from "react-router-dom";

const SignContainer=()=>{
    return (
        <div className="signContainer-wrapper">
            <Link to="/" className="about" id="sign-btn">Find Item</Link>
            <Link to="/loginList" className="about" id="sign-btn">Log In</Link>
            <Link to="/signupList" className="about" id="sign-btn" >Sign Up</Link>
        </div>
    );
}

export default SignContainer;