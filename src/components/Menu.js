import React from 'react';

const Menu = () => {
  return (
    <section id="menu" className="bg-amber-200 py-16 px-4 md:px-20 rounded-md shadow-md mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Modifiers</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Oat / Almond Milk</span>
                <span className="text-stone-700">+$0.75</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Extra Shot</span>
                <span className="text-stone-700">+$0.75</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Flavor (House-made)</span>
                <span className="text-stone-700">+$0.50</span>
              </li>
              <li className="py-2 border-b border-amber-300">
                <div className="text-sm italic text-stone-600">
                  Vanilla, Hazelnut, Caramel, Chocolate, White Mocha, Brown Sugar Cinnamon
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Coffee</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Espresso</span>
                <span className="text-stone-700">$3.75</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Drip Coffee</span>
                <span className="text-stone-700">$3.50 / $3.75 / $4</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Americano</span>
                <span className="text-stone-700">$4 / $4 / $4.75</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Cortado</span>
                <span className="text-stone-700">$4.25</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Latte</span>
                <span className="text-stone-700">$4.50 / $5 / $5.75</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Cappuccino</span>
                <span className="text-stone-700">$4.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Coldbrew</span>
                <span className="text-stone-700">$5 / $5.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Pour Over</span>
                <span className="text-stone-700">$6</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Noncoffee</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">100% Ceremonial Matcha Latte</span>
                <span className="text-stone-700">$6 / $6.50</span>
              </li>
              <li className="py-2 border-b border-amber-300">
                <div className="text-sm italic text-stone-600">Hot 10oz / Ice 12oz</div>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Chai Latte</span>
                <span className="text-stone-700">$4.50 / $5 / $5.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">London Fog</span>
                <span className="text-stone-700">$5 / $5.50</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Hot Tea</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Earl Grey</span>
                <span className="text-stone-700">$4</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Jasmine</span>
                <span className="text-stone-700">$4</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Blueberry Hibiscus</span>
                <span className="text-stone-700">$4</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Peppermint</span>
                <span className="text-stone-700">$4</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Iced Tea</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Green Citrus</span>
                <span className="text-stone-700">$4 / $4.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Elderberry Hibiscus</span>
                <span className="text-stone-700">$4 / $4.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">With Lemonade</span>
                <span className="text-stone-700">+$0.75</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Signature</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Walk To Work (12oz / 16oz)</span>
                <span className="text-stone-700">$6 / $6.75</span>
              </li>
              <li className="py-2 border-b border-amber-300">
                <div className="text-sm italic text-stone-600">
                  Iced latte with house-made sweet cream on top
                </div>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Mischief (4oz)</span>
                <span className="text-stone-700">$4.50</span>
              </li>
              <li className="py-2 border-b border-amber-300">
                <div className="text-sm italic text-stone-600">
                  Espresso with house-made sweet cream on top
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Coffee</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Espresso</span>
                <span className="text-stone-700">$3.00</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Latte</span>
                <span className="text-stone-700">$4.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Cappuccino</span>
                <span className="text-stone-700">$4.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Drip Coffee</span>
                <span className="text-stone-700">$3.50</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Tea & Specialties</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Chai Latte</span>
                <span className="text-stone-700">$5.00</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Hot Chocolate</span>
                <span className="text-stone-700">$4.00</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Matcha Latte</span>
                <span className="text-stone-700">$5.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Iced Tea</span>
                <span className="text-stone-700">$3.00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Food</h3>
            <ul>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Croissant</span>
                <span className="text-stone-700">$3.00</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Muffin</span>
                <span className="text-stone-700">$3.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Bagel</span>
                <span className="text-stone-700">$2.50</span>
              </li>
              <li className="py-2 flex justify-between items-center border-b border-amber-300">
                <span className="font-medium">Scone</span>
                <span className="text-stone-700">$3.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
