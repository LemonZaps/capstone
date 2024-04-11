import React from "react";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import LinkButton from "./Button";

const Main = () => {
    return(
        <>
        <HeroSection />
        <Specials />
        <LinkButton to="/order-online" description={"Order Online"} />
        </>
    )}

export default Main;