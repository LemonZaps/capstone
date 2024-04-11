import React from "react";
import Card from "./Card"
import LinkButton from "./Button";

const Specials = () => {
    return (
        <div>
            <div id="specials-title-container">
    <h2>This Week's Specials</h2>
    <LinkButton to="/order-online" description={"Order Online"} />
    </div>
    <Card />
    </div>
    )
}

export default Specials;