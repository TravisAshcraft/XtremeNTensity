// RegistrationPanel.js
import React from 'react';
import '../styles/VisitAndRegister.css';  // Make sure to import the CSS styles
import "../styles/RegisterPanel.css";

function RegistrationPanel({ isVisible, onClose }) {
    if (!isVisible) return null;

    return (
        <div className="modal-background">
            <div className="register-panel">
                <button className="close-btn" onClick={onClose}>X</button>
                <img src={process.env.PUBLIC_URL + "/images/android-chrome-192x192.png"} alt="XN Logo" className="modal-logo"/>
                <div className="register-container">
                    {/* Your existing register form or container content */}
                    <div className="register-box">
                        <h2>Register Now</h2>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="First Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="tel" placeholder="Phone"/>
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPanel;
