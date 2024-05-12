import React from 'react';
import '../styles/CoachCard.css';  // Import the CSS for styling

function CoachCard({ name, image }) {
    return (
        <div className="coach-card">
            <div className="coach-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="coach-info">
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default CoachCard;
