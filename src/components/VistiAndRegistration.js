import React, { useState } from 'react';
import "../styles/VisitAndRegister.css";

function VisitAndRegister() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
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
                setSubmissionStatus('Successfully registered!');
                // Optionally clear form or handle next steps
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            setSubmissionStatus('Failed to register. ' + error.message);
        }
    };

    return (
        <section className="visit-register">
            {/* existing code */}
            <div className="register-container">
                <div className="register-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="reset" className="clear-entries-btn">Clear Entries</button>
                    </form>
                    <div>{submissionStatus}</div>
                </div>
            </div>
            {/* existing code */}
        </section>
    );
}

export default VisitAndRegister;
