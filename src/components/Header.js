import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 p-6 flex justify-between items-center text-white">
      <img src="/images/url.trans.png" alt="URL COFFEE Logo" className="h-24" />
      
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
          <li><a href="#location" className="hover:text-gray-300">Location</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
