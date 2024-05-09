// Membership.js
import React from "react";
import PlanCard from "../components/PlanCard";
import "../styles/Memebership.css";

function Membership() {
    return (
        <section className="membership">
            <div className="top-gradient"></div>
            <div className="diagonal-box-1"></div>
            <div className="diagonal-box-2"></div>
            <h2>Join Our Family Today!</h2>
            <div className="plans">
                <PlanCard
                    title="Mom N Tot"
                    rate="Monthly Rate"
                    icon="♟️" /* Replace with an actual icon */
                />
                <PlanCard
                    title="Little Tumblers"
                    rate="Monthly Rate"
                    icon="♟️" /* Replace with an actual icon */
                />
                <PlanCard
                    title="Basic Tumble"
                    rate="Monthly Rate"
                    icon="⏲️"
                />
                <PlanCard
                    title="Advanced Tumble"
                    rate="Monthly Rate"
                    icon="🗓️"
                />
                <PlanCard
                    title="1 on 1 Coaching"
                    rate="Monthly Rate"
                    icon="♛"
                />
                <PlanCard
                    title="Cheer Competition"
                    rate="Annual Rate"
                    icon="👑"
                />
            </div>
            <div className="bottom-gradient"></div>
        </section>
    );
}

export default Membership;
