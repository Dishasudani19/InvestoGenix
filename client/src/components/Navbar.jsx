// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DollarSign, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-indigo-700 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <DollarSign className="h-8 w-8 text-indigo-200" />
//               <span className="ml-2 text-xl font-bold">FinanceEdu</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/success-stories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Success Stories
//             </Link>
//             <Link to="/current-news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Current News
//             </Link>
//             <Link to="/crypto" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Crypto
//             </Link>
//             <Link to="/blockchain" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Blockchain
//             </Link>
//             <Link to="/budget-tools" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Budget Tools
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/success-stories"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Success Stories
//             </Link>
//             <Link
//               to="/current-news"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Current News
//             </Link>
//             <Link
//               to="/crypto"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Crypto
//             </Link>
//             <Link
//               to="/blockchain"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Blockchain
//             </Link>
//             <Link
//               to="/budget-tools"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Budget Tools
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DollarSign, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-indigo-700 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <DollarSign className="h-8 w-8 text-indigo-200" />
//               <span className="ml-2 text-xl font-bold">FinanceEdu</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/success-stories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Success Stories
//             </Link>
//             <Link to="/current-news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Current News
//             </Link>
//             <Link to="/crypto" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Crypto
//             </Link>
//             <Link to="/blockchain" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Blockchain
//             </Link>
//             <Link to="/budget-tools" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition-colors">
//               Budget Tools
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/success-stories"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Success Stories
//             </Link>
//             <Link
//               to="/current-news"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Current News
//             </Link>
//             <Link
//               to="/crypto"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Crypto
//             </Link>
//             <Link
//               to="/blockchain"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Blockchain
//             </Link>
//             <Link
//               to="/budget-tools"
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Budget Tools
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa"; // Import user profile icon
import AuthPopup from "./AuthPopup";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/"); // Redirect to home
    window.location.reload(); // Reload to reflect logout

  };

  return (
    <nav className="bg-white text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="src/assets/Images/L5.jpg" // Replace with the path to your logo image
                alt="Logo"
                className="h-8 w-8 hover:opacity-75 transition-opacity duration-300"
              />
              <span className="ml-2 text-xl font-semibold italic text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                Investogenix
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-4 bg-white rounded-full shadow-md p-2 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              {[
                "Home",
                "Success Stories",
                "Current News",
                "Crypto",
                "Budget Tools",
              ].map((item) => (
                <Link
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105"
                >
                  {item}
                </Link>
              ))}

              {/* Show "Courses" only if the user is logged in */}
              {isLoggedIn && (
                <Link
                  to="/courses"
                  className="text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105"
                >
                  Courses
                </Link>
              )}
            </div>
          </div>

          {/* Right Side: Get Started Button & Profile */}
          <div className="flex items-center space-x-4">
            {/* Show Get Started only if NOT logged in */}
            {!isLoggedIn && (
              <button
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setIsAuthOpen(true);
                  console.log("Open Auth Modal");
                }}
              >
                Login
              </button>
            )}

            {/* Profile Icon & Dropdown (Only if logged in) */}
            {isLoggedIn && (
              <div className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="text-gray-700 hover:text-indigo-600 transition-all duration-300 focus:outline-none bg-transparent border-none"
                >
                  <FaUserCircle className="h-7 w-7 text-gray-700" />
                </button>
                <span className="text-gray-800 font-medium text-sm">
                  {/* console.log("userEmail"); */}
                  
      {localStorage.getItem("userEmail") } {/* Fallback if email is not found */}
    </span>
  

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-white w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all duration-300"
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
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "Success Stories",
              "Current News",
              "Crypto",
              "Blockchain",
              "Budget Tools",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 transform hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Show "Courses" in mobile menu only if user is logged in */}
            {isLoggedIn && (
              <Link
                to="/courses"
                className="block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 transform hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            )}
          </div>
        </div>
      )}

      {isAuthOpen && (
        <AuthPopup
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)} // This closes the AuthPopup
        />
      )}
    </nav>
  );
};

export default Navbar;

