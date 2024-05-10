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
                    rate="$30 Monthly"
                    icon="♟️" /* Replace with an actual icon */
                />
                <PlanCard
                    title="Little Tumblers"
                    rate="$40 Monthly"
                    icon="♟️" /* Replace with an actual icon */
                />
                <PlanCard
                    title="Basic Tumble"
                    rate="$55 Monthly"
                    icon="⏲️"
                />
                <PlanCard
                    title="Advanced Tumble"
                    rate="$60 Monthly"
                    icon="🗓️"
                />
                <PlanCard
                    title="1 on 1 Coaching"
                    rate="$25 for a 30-minute session"
                    icon="♛"
                />
                <PlanCard
                    title="Summer Classes"
                    rate="$25 Monthly per class"
                    icon="♛"
                />
                <PlanCard
                    title="Competition Cheer & Hip Hop"
                    rate="Depends On Level"
                    icon="👑"
                />
            </div>
            <div className="bottom-gradient"></div>
        </section>
    );
}

export default Membership;
