import React from 'react';
import backgroundImage from '../assets/urlcafe.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">URL COFFEE</h1>
        <p className="text-lg md:text-xl font-light">Modern craft coffee and more.</p>
      </div>
    </section>
  );
};

export default Hero;
