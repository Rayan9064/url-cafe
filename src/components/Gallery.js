import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('interior');
  
  const images = {
    interior: [
      {
        src: '/images/url.logo.png',
        alt: 'Modern minimalist interior with natural light',
        title: 'Cozy Interior Space'
      },
      {
        src: '/images/urlcafe.png',
        alt: 'Communal tables and skateboard stools',
        title: 'Community Seating'
      },
      {
        src: '/images/url.trans.png',
        alt: 'Korean-inspired design elements',
        title: 'Design Details'
      }
    ],
    drinks: [
      {
        src: '/images/url.logo.png',
        alt: 'Walk to Work signature latte with house-made sweet cream',
        title: 'Walk to Work Latte'
      },
      {
        src: '/images/urlcafe.png',
        alt: 'Perfectly crafted espresso drinks',
        title: 'Artisan Espresso'
      },
      {
        src: '/images/url.trans.png',
        alt: 'Ceremonial matcha latte',
        title: 'Premium Matcha'
      }
    ],
    atmosphere: [
      {
        src: '/images/url.logo.png',
        alt: 'Customers enjoying coffee and conversation',
        title: 'Community Vibes'
      },
      {
        src: '/images/urlcafe.png',
        alt: 'Natural lighting through large windows',
        title: 'Natural Light'
      },
      {
        src: '/images/url.trans.png',
        alt: 'Study-friendly environment',
        title: 'Work & Study Space'
      }
    ]
  };

  return (
    <section id="gallery" className="py-16 px-4 md:px-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">Experience URL Coffee</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            {Object.keys(images).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition duration-300 ${
                  activeTab === tab
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-amber-600 hover:bg-amber-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images[activeTab].map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="aspect-w-4 aspect-h-3 bg-amber-200">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Follow us on social media for more behind-the-scenes content and daily inspiration
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://instagram.com/urlcoffee" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-3 rounded-full hover:scale-110 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com/urlcoffee" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
