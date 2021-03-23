import preloader from "../../../assets/images/logo/Rolling-1s-231px.svg";
import React from "react";

function Preloader () {
    return (
        <React.Fragment>
            <img src={preloader} alt="preloader" />
        </React.Fragment>
    )
}

export default Preloader;