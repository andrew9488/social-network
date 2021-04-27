import preloader from "../../../assets/images/logo/Rolling-1s-231px.svg";
import React from "react";

const Preloader: React.FC = React.memo(() => {
    return (
        <>
            <img src={preloader} alt="preloader"/>
        </>
    )
})

export default Preloader;