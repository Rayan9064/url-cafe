import React from 'react';

const Location = () => {
  return (
    <section id="location" className="py-16 px-4 md:px-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-800">Find Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Located in the heart of Seattle's First Hill, we're your neighborhood coffee destination
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-amber-700">Visit Our Café</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Address</h4>
                    <p className="text-gray-700">
                      524 Broadway<br />
                      Seattle, WA 98122<br />
                      United States
                    </p>
                    <p className="text-sm text-amber-600 mt-2">
                      Between Pike St & Pine St, near Harborview & Swedish Medical Centers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Hours</h4>
                    <div className="text-gray-700 space-y-1">
                      <p><span className="font-medium">Monday - Friday:</span> 7:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Saturday - Sunday:</span> 8:00 AM - 4:00 PM</p>
                    </div>
                    <p className="text-sm text-amber-600 mt-2">
                      Extended quiet study hours: Mon-Thu 2-6 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-1">Contact</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:(614) 555-1234" 
                        className="text-amber-600 hover:text-amber-700 font-medium transition duration-300"
                      >
                        (614) 555-1234
                      </a>
                      <br />
                      <a 
                        href="mailto:hello@urlcoffee.com" 
                        className="text-amber-600 hover:text-amber-700 font-medium transition duration-300"
                      >
                        hello@urlcoffee.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation & Accessibility */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-amber-700">Getting Here</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-amber-600 mb-2">🚌 Public Transit</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Metro Route 60 (Broadway)</li>
                    <li>• Seattle Streetcar (First Hill Line)</li>
                    <li>• Multiple bus connections nearby</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-600 mb-2">🅿️ Parking</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Street parking available</li>
                    <li>• Public parking garages nearby</li>
                    <li>• Hospital visitor parking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-600 mb-2">♿ Accessibility</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wheelchair accessible entrance</li>
                    <li>• Accessible restrooms</li>
                    <li>• Ground level seating</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-600 mb-2">🏥 Nearby</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Harborview Medical Center</li>
                    <li>• Swedish Medical Center</li>
                    <li>• Seattle University</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://maps.google.com/?q=URL+Coffee,+524+Broadway,+Seattle,+WA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
              <a 
                href="tel:(614) 555-1234"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-amber-600 text-white">
              <h3 className="text-lg font-semibold">Find Us on the Map</h3>
              <p className="text-sm opacity-90">524 Broadway, Seattle, WA 98122</p>
            </div>
            <div className="relative h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.7!2d-122.3205144!3d47.6067021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b3d4b53a80d%3A0x5bc4ae55a32ecb5b!2sURL+Coffee!5e0!3m2!1sen!2sus!4v1701254359050!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="URL Coffee Location Map"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Neighborhood Context */}
        <div className="mt-12 bg-amber-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-amber-800">Discover First Hill</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            URL Coffee is proud to call First Hill home. This vibrant Seattle neighborhood is known as "Pill Hill" 
            for its concentration of medical facilities, but it's also home to beautiful parks, historic architecture, 
            and a growing community of residents and professionals. Come explore what makes our corner of Seattle special!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
