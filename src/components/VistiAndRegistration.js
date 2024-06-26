﻿import React, { useState } from 'react';
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
            <div id="visit-our-gym"></div>
            <div className="visit-container">
                <div className="map-embed">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.4885980071663!2d-99.45685140833355!3d32.406626258046856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8656b8d54f4f8949%3A0xbb629fb687ed9605!2s4093%20I-20%2C%20Baird%2C%20TX%2079504!5e0!3m2!1sen!2sus!4v1715368434037!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen="true"
                        aria-hidden="false"
                        tabIndex="0"
                        title="Gym Location Map"
                    ></iframe>
                </div>

                <div className="map-section">
                    <h2>Visit Our Gym</h2>
                    <p>Address: 4093 Interstate 20 West, Clyde Texas</p>
                    <p>Email: xncheer.tumble@yahoo.com</p>
                    <p>Contact Number: (325) 725-3719</p>

                    <h2>OUR SOCIALS:</h2>
                    <div className="socials">
                        <a href="https://www.facebook.com/xncheer"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.facebook.com/521035124739150/"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="https://www.instagram.com/xtreme_ntensity?igsh=MXhqM3J4cDNhZjQ1NA%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@xtreme.ntensity?_t=8mF2RhXTQwY&_r=1"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
            </div>

            <div className="register-container">
                <div className="register-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        <button type="submit" className="submit-btn">Submit</button>
                        <button type="reset" className="clear-entries-btn">Clear Entries</button>
                    </form>
                    <div>{submissionStatus}</div>
                </div>

                <div className="join-family-section">
                    <h2>Join Our Family!</h2>
                    <div className="image-boxes">
                        <div className="image-box">
                            <img src={process.env.PUBLIC_URL + "/images/Londyn_Addi.png"} alt="Family Member 1"/>
                        </div>
                        <div className="image-box">
                            <img src={process.env.PUBLIC_URL + "/images/Kate_Cameron.jpg"} alt="Family Member 2"/>
                        </div>
                        <div className="image-box">
                            <img src={process.env.PUBLIC_URL + "/images/D.jpg"} alt="Family Member 3"/>
                        </div>
                        <div className="image-box">
                            <img src={process.env.PUBLIC_URL + "/images/Group.jpg"} alt="Family Member 3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisitAndRegister;
