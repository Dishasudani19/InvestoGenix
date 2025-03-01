import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <DollarSign className="h-8 w-8 text-indigo-200" />
              <span className="ml-2 text-xl font-bold">FinanceEdu</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/success-stories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Success Stories
            </Link>
            <Link to="/current-news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Current News
            </Link>
            <Link to="/crypto" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Crypto
            </Link>
            <Link to="/blockchain" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Blockchain
            </Link>
            <Link to="/budget-tools" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
              Budget Tools
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/success-stories" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/current-news" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Current News
            </Link>
            <Link 
              to="/crypto" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Crypto
            </Link>
            <Link 
              to="/blockchain" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blockchain
            </Link>
            <Link 
              to="/budget-tools" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Budget Tools
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;