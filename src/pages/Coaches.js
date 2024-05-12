import React from 'react';
import CoachCard from '../components/CoachCard';
import '../styles/Coaches.css';


// Kristen Franklin
// 
// 
// 
// 
// Sample data for coaches
const sampleCoaches = [
    { id: 1, name: 'Tamsey Johnson', image: './images/Tamsey.jpeg' },
    { id: 2, name: 'Amber Brannan', image: './images/android-chrome-512x512.png' },
    { id: 3, name: 'Amy Hodge', image: './images/android-chrome-512x512.png' },
    { id: 4, name: 'Katherine Gatewood', image: './images/android-chrome-512x512.png' },
    { id: 5, name: 'Kristen Franklin', image: './images/Kristen.jpeg' },
    { id: 6, name: 'Sarah Kirkland', image: './images/android-chrome-512x512.png' },
    { id: 7, name: 'Silvia Sillemon', image: './images/android-chrome-512x512.png' },
    { id: 8, name: 'Channing Simmons', image: './images/android-chrome-512x512.png' },
    { id: 9, name: 'Alicia Clark', image: './images/Alicia.jpeg' }
    
];

function CoachesSection() {
    return (
        <div className="coaches-section">
            <div id="coaches"></div>
            <h2>Meet Our Coaches</h2>
            <div className="coaches-container">
                {sampleCoaches.map(coach => (
                    <CoachCard key={coach.id} name={coach.name} image={coach.image}/>
                ))}
            </div>
        </div>
    );
}

export default CoachesSection;