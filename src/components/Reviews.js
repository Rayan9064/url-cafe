import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "The 'Walk to Work' latte is absolutely incredible! The house-made sweet cream on top is what dreams are made of. The minimalist Korean-inspired interior creates such a peaceful atmosphere.",
      platform: "Google Reviews",
      verified: true
    },
    {
      id: 2,
      name: "Jason K.",
      rating: 5,
      text: "Perfect spot for remote work. Great WiFi, comfortable seating with those unique skateboard stools, and the coffee is consistently excellent. The matcha latte is the best I've had in Seattle!",
      platform: "Yelp",
      verified: true
    },
    {
      id: 3,
      name: "Maria L.",
      rating: 5,
      text: "URL Coffee has become my go-to study spot. The natural light is amazing, the staff is incredibly friendly, and their signature drinks never disappoint. Love the community vibe here!",
      platform: "TripAdvisor",
      verified: true
    },
    {
      id: 4,
      name: "David R.",
      rating: 5,
      text: "As a coffee connoisseur, I appreciate their partnership with Maru Coffee. The pour-over is exceptional, and the attention to detail in every cup is evident. Highly recommend!",
      platform: "Google Reviews",
      verified: true
    },
    {
      id: 5,
      name: "Emma T.",
      rating: 5,
      text: "The perfect blend of Seattle coffee culture and Korean aesthetics. Every visit feels like a mini retreat from the city. The avocado toast pairs perfectly with their espresso drinks.",
      platform: "Yelp",
      verified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-16 px-4 md:px-20 bg-gradient-to-r from-amber-100 to-orange-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-800">What Our Community Says</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it – hear from our amazing customers who make URL Coffee a special place
        </p>

        {/* Featured Review Slider */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-400"></div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic mb-6 leading-relaxed">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <p className="font-semibold text-amber-700 text-lg">{reviews[currentReview].name}</p>
                  <p className="text-sm text-gray-500 flex items-center justify-center">
                    <span>{reviews[currentReview].platform}</span>
                    {reviews[currentReview].verified && (
                      <svg className="w-4 h-4 ml-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === currentReview ? 'bg-amber-600' : 'bg-amber-300 hover:bg-amber-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-2">2+ Years</div>
            <div className="text-gray-600">Serving First Hill</div>
          </div>
        </div>

        {/* CTA to review platforms */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-amber-700">Share Your Experience</h3>
          <p className="text-gray-600 mb-6">Visited us recently? We'd love to hear about your experience!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://g.page/url-coffee/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Review on Google
            </a>
            <a 
              href="https://www.yelp.com/writeareview/biz/url-coffee-seattle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Review on Yelp
            </a>
            <a 
              href="https://www.tripadvisor.com/UserReviewEdit-g60878-d26959079-URL_Coffee-Seattle_Washington.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Review on TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
