// OfferBlock.js
import React from "react";
import "../styles/OfferBlock.css";

function OfferBlock({ title, description, icon }) {
    return (
        <div className="offer-block">
            <div className="offer-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default OfferBlock;
