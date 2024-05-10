
// MainContent.js
import React from "react";
import Hero from "./Hero";
import About from "./About";
import JoinMembership from "./JoinMembership";
import VisitAndRegister from "../components/VistiAndRegistration";

function Home() {
    return (
        <div className="App">
            <Hero/>
            <About/>
            <JoinMembership/>
            <VisitAndRegister/>
            {/* Add any other components or sections as needed */}
        </div>

    );
}

export default Home;