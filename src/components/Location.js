import React from 'react';

const Location = () => {
  return (
    <section id="location" className="bg-amber-100 py-16 px-4 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-orange-700">Find Us</h2>
          <div className="text-lg space-y-4">
            <p className="font-semibold">Address:</p>
            <p>524 Broadway<br />Seattle, WA 98122<br />United States</p>
            
            <p className="font-semibold mt-6">Hours:</p>
            <ul>
              <li>Monday - Friday: 7am - 5pm</li>
              <li>Saturday - Sunday: 8am - 4pm</li>
            </ul>

            <p className="font-semibold mt-6">Contact:</p>
            <p>(614) 555-1234<br />hello@urlcoffee.com</p>
          </div>
        </div>
        <div>
          <div className="bg-amber-200 h-96 w-full rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.7!2d-122.3205144!3d47.6067021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b3d4b53a80d%3A0x5bc4ae55a32ecb5b!2sURL+Coffee!5e0!3m2!1sen!2sus!4v1701254359050!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border: 0}}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="URL Coffee Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
