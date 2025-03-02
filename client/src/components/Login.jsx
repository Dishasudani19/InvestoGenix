// import React, { useState } from "react";
import { login } from "../api.jsx";
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../assets/css/login.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Login = ({ onClose, switchToRegister }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/accounts/google/login/";
  };

  const handleChange = (e) => {
             setUser({ ...user, [e.target.name]: e.target.value });
          };

          const handleSubmit = async (e) => {
                    e.preventDefault(); 
                    console.log("Login component rendered");
                    console.log("User state:", user);
                    console.log("Handle change event:", e);
                    console.log("Handle submit event:", e);
            
                    try {
                        const response = await login(user);
                        console.log("Login response:", response); // Now correctly placed
                        
                        if (response.data.access) {
                            // localStorage.setItem("token", response.data.access);
                            // console.log('Login submitted:', { username, password });
                            // alert("Login Successful");

                            localStorage.setItem("token", response.data.access);
            alert("Login Successful");
            onClose();
            navigate("/");
                        }
                    } catch (error) {
                        console.error("Login Error:", error);
                        alert("Invalid Credentials");
                    }
                };
    

                return (
                  <div className="popup-overlay">
                    <div className="popup-container">
                      <div className="popup-content">
                        <div className="left-panel">
                          <h2>Hello, Welcome!</h2>
                          <p>Don't have an account?</p>
                          <button className="register-btn" onClick={switchToRegister}>
                            Register
                          </button>
                        </div>
                        <div className="right-panel">
                          <h2>Login</h2>
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={handleChange}
                                required
                              />
                              <span className="icon">👤</span>
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
                            <div className="forgot-password">
                              <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className="submit-btn">
                              Login
                            </button>
                          </form>
                          <div className="social-login">
                            <p>or login with social platforms</p>
                            <div className="social-icons">
                              <button onClick={handleGoogleLogin} className="social-icon">
                              {/* <FaGoogle className="text-red-500 w-8 h-8 block" /> */}
                              {/* <i className="fa fa-google" aria-hidden="true"></i> */}
                              <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "24px", color: "#DB4437" }} />

                              </button>
                              {/* <button className="social-icon">
                                <FaFacebook />
                              </button>
                              <button className="social-icon">
                                <FaGithub />
                              </button>
                              <button className="social-icon">
                                <FaLinkedin />
                              </button> */}
                            </div>
                          </div> 
                        </div>
                      </div>
                      <button className="close-btn" onClick={onClose}>
                        ×
                      </button>
                    </div>
                  </div>
                );
              };

export default Login;

