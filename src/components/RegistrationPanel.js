import React, { useState } from 'react';
import '../styles/VisitAndRegister.css';
import "../styles/RegisterPanel.css";

function RegistrationPanel({ isVisible, onClose }) {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmissionStatus('Submitting...');
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                setSubmissionStatus('Registration successful! Please check your email.');
                onClose(); // Close the modal on successful registration
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            setSubmissionStatus('Registration failed: ' + error.message);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="modal-background" onClick={onClose}>
            <div className="register-panel" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <img src={process.env.PUBLIC_URL + "/images/android-chrome-192x192.png"} alt="XN Logo" className="modal-logo"/>
                <form onSubmit={handleSubmit} className="register-form"> {/* Make sure this class is correctly applied */}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                {submissionStatus && <p>{submissionStatus}</p>}
            </div>
        </div>
    );
}

export default RegistrationPanel;
