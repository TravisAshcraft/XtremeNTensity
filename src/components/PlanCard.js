// PlanCard.js
import React from "react";
import "../styles/PlanCard.css";

function PlanCard({ title, rate, icon }) {
    return (
        <div className="plan-card">
            <div className="plan-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{rate}</p>
        </div>
    );
}

export default PlanCard;
