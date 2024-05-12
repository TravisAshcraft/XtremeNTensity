import React, { useEffect } from 'react';
import '../styles/ParticleTrail.css'; // Assume your styles are defined here

const ParticleTrail = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            document.body.appendChild(particle);

            // Set particle position
            particle.style.left = `${e.pageX - 2.5}px`;
            particle.style.top = `${e.pageY - 2.5}px`;

            // Randomize size for a natural effect
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Animate the particle
            let animation = particle.animate([
                { transform: 'translate3D(0, 0, 0)', opacity: 1 },
                { transform: `translate3D(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px, 0)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 500,
                easing: 'ease-out'
            });

            animation.onfinish = () => {
                particle.remove();
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null;  // This component does not render anything
};

export default ParticleTrail;
