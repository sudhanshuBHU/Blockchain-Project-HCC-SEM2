import React from "react";
import ControlledCarousel from "./ControlledCarousel";
import Counter from "./Counter";
import SignContainer from "./SignContainer";
import "./Main.css";


const Main = () => {
    return (
        <div className="main-container">
            <ControlledCarousel />
            <Counter />
            <SignContainer />
        </div>
    );
}

export default Main;