import React, { useState } from 'react';

const Events = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "Coffee Cupping Session",
      date: "September 15, 2025",
      time: "2:00 PM - 4:00 PM",
      description: "Join us for a guided tasting of our latest single-origin coffees from Maru Coffee. Learn about flavor profiles and brewing techniques.",
      price: "Free",
      capacity: "Limited to 15 people"
    },
    {
      id: 2,
      title: "Latte Art Workshop",
      date: "September 22, 2025", 
      time: "10:00 AM - 12:00 PM",
      description: "Master the basics of latte art with our experienced baristas. All skill levels welcome!",
      price: "$25 (includes coffee and pastry)",
      capacity: "Limited to 8 people"
    },
    {
      id: 3,
      title: "Local Artist Showcase",
      date: "October 1, 2025",
      time: "6:00 PM - 8:00 PM",
      description: "Featuring works from First Hill area artists. Light refreshments provided.",
      price: "Free",
      capacity: "Open to all"
    }
  ];

  const communityInitiatives = [
    {
      title: "Healthcare Worker Discount",
      description: "15% off all drinks for Harborview and Swedish Medical Center staff with ID",
      icon: "🏥"
    },
    {
      title: "Student Study Hours",
      description: "Free WiFi and extended quiet hours Monday-Thursday 2-6 PM for students",
      icon: "📚"
    },
    {
      title: "Local Partnerships",
      description: "Proudly featuring pastries from neighborhood bakeries and supporting local suppliers",
      icon: "🤝"
    },
    {
      title: "Sustainability Initiative",
      description: "Bring your own cup for a $0.25 discount and help reduce waste",
      icon: "🌱"
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="events" className="py-16 px-4 md:px-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-800">Community & Events</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          More than just coffee – we're building connections and supporting our First Hill community through events, partnerships, and initiatives
        </p>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-amber-700">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-amber-800 mb-2">{event.title}</h4>
                  <div className="text-sm text-gray-600 mb-4 space-y-1">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {event.price}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{event.description}</p>
                  <p className="text-xs text-amber-600 font-medium mb-4">{event.capacity}</p>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Initiatives */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-amber-700">Community Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {communityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{initiative.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-700 mb-2">{initiative.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
          <p className="text-xl mb-8 opacity-90">
            Get the latest updates on events, new menu items, and community initiatives
          </p>
          
          {!subscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-lg font-medium">Thanks for subscribing! ☕</p>
              <p className="text-sm opacity-90">You'll hear from us soon with exciting updates.</p>
            </div>
          )}

          <p className="text-sm mt-4 opacity-75">
            No spam, just great coffee updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
