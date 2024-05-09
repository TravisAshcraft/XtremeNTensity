// About.js
import React from "react";
import OfferBlock from "../components/OfferBlock";
import "../styles/About.css";

function About() {
    return (
        <section className="about">
            <h2>About</h2>
            <p>At XN we strive for excellence not just in performance but in attention to detail. We build your kids
                from the ground up in cheer and tumble no matter what their experience level is.</p>
            <div className="offer-blocks">
                <OfferBlock
                    title="Team Building"
                    description="Group training to enhance collaboration."
                    icon="🛡️" /* Replace with actual icon component/image */
                />
                <OfferBlock
                    title="1 on 1 Coaching"
                    description="Personalized sessions with expert trainers."
                    icon="🎯" /* Replace with actual icon component/image */
                />
                <OfferBlock
                    title="Nutrition Plan Guide"
                    description="Tailored nutrition plans for optimal health."
                    icon="🍎" /* Replace with actual icon component/image */
                />
            </div>
            <div className="about-image"></div>
        </section>
    );
}

export default About;
