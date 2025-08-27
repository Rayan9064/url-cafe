import React from 'react';
import backgroundImage from '../assets/urlcafe.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">URL COFFEE</h1>
        <p className="text-xl md:text-2xl font-light mb-2">Seattle's Cozy Specialty Coffee Spot</p>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
          Korean-inspired minimalist design meets Seattle culture in First Hill's premier coffee destination
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View Our Menu
          </button>
          <button 
            onClick={() => scrollToSection('location')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Visit Us
          </button>
          <a 
            href="tel:(614) 555-1234"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
