// import React, { useState } from "react";
// import { signup } from "../api";

// const Signup = () => {
//     const [user, setUser] = useState({ name: "", email: "", password: "" });

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await signup(user);
//             alert("Signup Successful");
//         } catch (error) {
//           console.log(error);
          
//             alert("Signup Failed");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// };

// export default Signup;

import React, { useState,useRef, useEffect } from "react";
import { signup } from "../api.jsx"; 
import "../assets/css/signup.css";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Signup = ({ onClose, switchToLogin }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const modalRef = useRef(null);

  // Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted", user);

    try {
      await signup(user);
      alert("Signup Successful");
      switchToLogin(); // Redirect to login aft er successful signup
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup Failed");
    }
  };

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

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <div className="left-panel-reg">
            <div className="form-container">
              <h2>Registration</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon">👤</span>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon">✉️</span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon">🔒</span>
                </div>
                <button type="submit" className="submit-btn">
                  Register
                </button>
              </form>
              {/* <div className="social-login">
                <p>or register with social platforms</p>
                <div className="social-icons">
                  <button className="social-icon">
                    <FaGoogle />
                  </button>
                  <button className="social-icon">
                    <FaFacebook />
                  </button>
                  <button className="social-icon">
                    <FaGithub />
                  </button>
                  <button className="social-icon">
                    <FaLinkedin />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="right-panel-reg">
            <h2>Welcome Back!</h2>
            <p>Already have an account?</p>
            <button className="login-btn" onClick={switchToLogin}>
              Login
            </button>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Signup;
