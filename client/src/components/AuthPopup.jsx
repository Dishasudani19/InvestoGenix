// AuthPopup.jsx - Main component to manage both popups
import React, { useState, useRef, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthPopup = ({ isOpen, onClose }) => {
  const [activePopup, setActivePopup] = useState('login');
  const modalRef = useRef(null); 


  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {activePopup === 'login' ? (
        <Login
          onClose={onClose}
          switchToRegister={() => setActivePopup('register')}
        />
      ) : (
        <Signup
          onClose={onClose}
          switchToLogin={() => setActivePopup('login')}
        />
      )}
    </>
  );
};
export default AuthPopup;