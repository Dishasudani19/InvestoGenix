import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const CurrentNews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Current Financial News</h1>
      <p className="text-lg text-gray-600 mb-12">
        Stay updated with the latest news and developments in the financial world.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News Article 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Federal Reserve"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 15, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>5 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Federal Reserve Announces New Interest Rate Policy</h2>
            <p className="text-gray-600 mb-4">
              The Federal Reserve has announced a significant shift in its approach to managing inflation and interest rates, which could impact borrowers and investors.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>

        {/* News Article 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Stock Market"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 14, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>4 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Global Markets Reach New Highs Amid Economic Recovery</h2>
            <p className="text-gray-600 mb-4">
              Stock markets around the world have reached record highs as economic data suggests a stronger than expected recovery from recent challenges.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>

        {/* News Article 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Real Estate"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 12, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>6 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Housing Market Shows Signs of Cooling After Record Growth</h2>
            <p className="text-gray-600 mb-4">
              After years of rapid price increases, the housing market is showing signs of stabilization with inventory rising and price growth slowing.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>

        {/* News Article 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Cryptocurrency"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 10, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>3 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Major Financial Institutions Adopt Cryptocurrency Services</h2>
            <p className="text-gray-600 mb-4">
              Several major banks and financial institutions have announced new cryptocurrency custody and trading services for their clients.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>

        {/* News Article 5 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Retirement"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 8, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>7 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">New Legislation Could Change Retirement Savings Rules</h2>
            <p className="text-gray-600 mb-4">
              Proposed legislation aims to expand retirement savings options and provide tax incentives for both employers and employees.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>

        {/* News Article 6 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            className="h-48 w-full object-cover" 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Financial Technology"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>May 5, 2025</span>
              <Clock className="h-4 w-4 ml-4 mr-1" />
              <span>5 min read</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Fintech Innovations Reshaping Personal Finance Management</h2>
            <p className="text-gray-600 mb-4">
              New financial technology solutions are making it easier for consumers to manage budgets, invest, and plan for financial goals.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800">
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Load More News
        </button>
      </div>
    </div>
  );
};

export default CurrentNews;