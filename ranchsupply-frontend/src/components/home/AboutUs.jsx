import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-hero">
        <h1>About Ranch Supply</h1>
      </section>

      <section className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          Ranch Supply is dedicated to streamlining operations for ranchers and ensuring they have easy access to the supplies they need. Our mission is to eliminate inefficiencies and frustrations, allowing ranchers to focus on what they do best – running their ranches.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
