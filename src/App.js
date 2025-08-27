import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Events from './components/Events';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Events />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
