import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signatures');

  const menuData = {
    signatures: {
      title: "Signature Drinks",
      description: "Our unique creations that define the URL Coffee experience",
      items: [
        {
          name: "Walk To Work",
          price: "$6.00 / $6.75",
          description: "Iced latte with house-made sweet cream on top",
          sizes: "12oz / 16oz",
          popular: true,
          vegan: false
        },
        {
          name: "Mischief",
          price: "$4.50",
          description: "Espresso with house-made sweet cream on top",
          sizes: "4oz",
          popular: true,
          vegan: false
        }
      ]
    },
    coffee: {
      title: "Coffee",
      description: "Premium coffee crafted with beans from Seattle's Maru Coffee",
      items: [
        {
          name: "Espresso",
          price: "$3.75",
          description: "Rich, concentrated coffee shot",
          sizes: "Single shot",
          popular: false,
          vegan: true
        },
        {
          name: "Drip Coffee",
          price: "$3.50 / $3.75 / $4.00",
          description: "Freshly brewed daily selection",
          sizes: "12oz / 16oz / 20oz",
          popular: false,
          vegan: true
        },
        {
          name: "Americano",
          price: "$4.00 / $4.00 / $4.75",
          description: "Espresso with hot water",
          sizes: "12oz / 16oz / 20oz",
          popular: false,
          vegan: true
        },
        {
          name: "Cortado",
          price: "$4.25",
          description: "Equal parts espresso and warm milk",
          sizes: "4oz",
          popular: false,
          vegan: false
        },
        {
          name: "Latte",
          price: "$4.50 / $5.00 / $5.75",
          description: "Espresso with steamed milk",
          sizes: "12oz / 16oz / 20oz",
          popular: true,
          vegan: false
        },
        {
          name: "Cappuccino",
          price: "$4.50",
          description: "Espresso with foamed milk",
          sizes: "6oz",
          popular: false,
          vegan: false
        },
        {
          name: "Coldbrew",
          price: "$5.00 / $5.50",
          description: "Smooth, cold-extracted coffee",
          sizes: "12oz / 16oz",
          popular: true,
          vegan: true
        },
        {
          name: "Pour Over",
          price: "$6.00",
          description: "Single-origin coffee, carefully hand-brewed",
          sizes: "12oz",
          popular: false,
          vegan: true
        }
      ]
    },
    tea: {
      title: "Tea & Non-Coffee",
      description: "Premium teas and specialty beverages",
      items: [
        {
          name: "100% Ceremonial Matcha Latte",
          price: "$6.00 / $6.50",
          description: "Premium Japanese matcha with your choice of milk",
          sizes: "Hot 10oz / Iced 12oz",
          popular: true,
          vegan: false
        },
        {
          name: "Chai Latte",
          price: "$4.50 / $5.00 / $5.50",
          description: "Spiced tea blend with steamed milk",
          sizes: "12oz / 16oz / 20oz",
          popular: true,
          vegan: false
        },
        {
          name: "London Fog",
          price: "$5.00 / $5.50",
          description: "Earl Grey tea with vanilla and steamed milk",
          sizes: "12oz / 16oz",
          popular: false,
          vegan: false
        },
        {
          name: "Earl Grey",
          price: "$4.00",
          description: "Classic bergamot-flavored black tea",
          sizes: "Hot",
          popular: false,
          vegan: true
        },
        {
          name: "Jasmine",
          price: "$4.00",
          description: "Delicate green tea with jasmine flowers",
          sizes: "Hot",
          popular: false,
          vegan: true
        },
        {
          name: "Blueberry Hibiscus",
          price: "$4.00",
          description: "Fruity herbal tea blend",
          sizes: "Hot",
          popular: false,
          vegan: true
        },
        {
          name: "Green Citrus",
          price: "$4.00 / $4.50",
          description: "Refreshing green tea with citrus notes",
          sizes: "12oz / 16oz",
          popular: false,
          vegan: true
        },
        {
          name: "Elderberry Hibiscus",
          price: "$4.00 / $4.50",
          description: "Antioxidant-rich herbal blend",
          sizes: "12oz / 16oz",
          popular: false,
          vegan: true
        }
      ]
    },
    food: {
      title: "Food",
      description: "Fresh pastries and light bites to complement your drink",
      items: [
        {
          name: "Avocado Toast",
          price: "$8.50",
          description: "Fresh avocado on artisan bread with sea salt and olive oil",
          sizes: "",
          popular: true,
          vegan: true
        },
        {
          name: "Croissant",
          price: "$3.00",
          description: "Buttery, flaky French pastry",
          sizes: "",
          popular: true,
          vegan: false
        },
        {
          name: "Almond Croissant",
          price: "$4.50",
          description: "Croissant filled with almond cream and sliced almonds",
          sizes: "",
          popular: true,
          vegan: false
        },
        {
          name: "Blueberry Muffin",
          price: "$3.50",
          description: "House-made with fresh blueberries",
          sizes: "",
          popular: false,
          vegan: false
        },
        {
          name: "Everything Bagel",
          price: "$2.50",
          description: "Toasted bagel with cream cheese",
          sizes: "",
          popular: false,
          vegan: false
        },
        {
          name: "Scone",
          price: "$3.00",
          description: "Traditional British pastry, rotating flavors",
          sizes: "",
          popular: false,
          vegan: false
        }
      ]
    }
  };

  const modifiers = [
    { name: "Oat / Almond Milk", price: "+$0.75" },
    { name: "Extra Shot", price: "+$0.75" },
    { name: "Flavor (House-made)", price: "+$0.50" },
    { name: "With Lemonade", price: "+$0.75" }
  ];

  const flavors = [
    "Vanilla", "Hazelnut", "Caramel", "Chocolate", "White Mocha", "Brown Sugar Cinnamon"
  ];

  return (
    <section id="menu" className="py-16 px-4 md:px-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-800">Our Menu</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Crafted with love, featuring premium beans from Maru Coffee and house-made syrups
        </p>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-md p-2 max-w-2xl mx-auto">
          {Object.entries(menuData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-md font-medium transition duration-300 m-1 ${
                activeCategory === key
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'text-amber-600 hover:bg-amber-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-amber-700 mb-2">
              {menuData[activeCategory].title}
            </h3>
            <p className="text-gray-600">{menuData[activeCategory].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {menuData[activeCategory].items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 relative">
                {item.popular && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-amber-800 flex items-center">
                    {item.name}
                    {item.vegan && (
                      <span className="ml-2 text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
                        VEGAN
                      </span>
                    )}
                  </h4>
                  <span className="text-lg font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                {item.sizes && (
                  <p className="text-xs text-gray-500 italic">{item.sizes}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modifiers Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-amber-700">Customize Your Drink</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-600">Add-ons & Modifiers</h4>
              <ul className="space-y-3">
                {modifiers.map((modifier, index) => (
                  <li key={index} className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="font-medium">{modifier.name}</span>
                    <span className="text-amber-600 font-semibold">{modifier.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-600">House-made Flavors</h4>
              <div className="grid grid-cols-2 gap-2">
                {flavors.map((flavor, index) => (
                  <span key={index} className="bg-amber-100 text-amber-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                    {flavor}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                All syrups are made fresh in-house with natural ingredients
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to try our amazing coffee? Visit us or call ahead for pickup!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(614) 555-1234"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Call for Pickup
            </a>
            <button 
              onClick={() => document.getElementById('location').scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Find Our Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
