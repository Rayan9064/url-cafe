import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="bg-amber-50 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-800">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Nestled in Seattle's vibrant First Hill neighborhood at 524 Broadway, URL Coffee represents 
                the perfect fusion of Korean minimalist design philosophy and Pacific Northwest coffee culture. 
                Founded by Ethan Choi and Zoey Jung, our café serves as a community hub for young professionals, 
                students, and locals seeking a stress-free retreat from urban life.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Our space features contemporary décor with abundant natural light, skateboard deck stools, 
                and communal tables that embody mid-century modern aesthetics with urban whimsy. We're more 
                than just a coffee shop – we're your neighborhood's cozy sanctuary.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">What Makes Us Special</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>Premium beans from Seattle's Maru Coffee</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>House-made sweet cream and syrups</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>Korean-inspired minimalist design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>Community-focused atmosphere</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span>Ethically sourced ingredients</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl italic text-amber-700 font-light">
              "Creating connections, one perfect cup at a time"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
