import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Counter from "./Counter";
import SignContainer from "./SignContainer";
import "./Main.css";
import SignIn from "./SignIn";
import Test from "./Test";
import CheckWallet from "./CheckWallet";
import ProfileDoctor from "./ProfileDoctor";


const Main = () => {
    return (
        <div className="main-container">
            <ProfileDoctor/>
            {/* <Test/> */}
            {/* <SignIn/> */}
            {/* <ControlledCarousel /> */}
            {/* <Counter /> */}
            {/* <CheckWallet/> */}
            {/* <SignContainer /> */}
        </div>
    );
}

export default Main;