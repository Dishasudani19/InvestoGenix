import React, { useState, useEffect } from 'react';
import Botlogo from "../assets/Images/botlogo.jpg";
import { X } from "lucide-react";
import axios from "axios";

const GenixBotUI = () => {
  // States for chat functionality
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm GenixBot, your friendly AI Agent here to help with finance. How can I assist you?", sender: "bot" }
  ]);
  const [activeTab, setActiveTab] = useState('chat');
  const [minimized, setMinimized] = useState(false);
  
  // States for API integration
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Add a pulse effect state
  const [isPulsing, setIsPulsing] = useState(false);

  // Pulse effect for the minimized button to make it more attractive
  useEffect(() => {
    if (minimized) {
      // Create a pulsing effect every 5 seconds
      const interval = setInterval(() => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [minimized]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    // Clear any previous errors when user starts typing
    if (error) setError("");
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') {
      setError("Please enter a question.");
      return;
    }
    
    // Add user message to chat
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage.trim(),
      sender: "user"
    };
    
    setMessages([...messages, newUserMessage]);
    
    // Set loading state and show typing indicator
    setLoading(true);
    setError("");
    
    // Create a temporary message for "typing" indicator
    const typingMessage = {
      id: messages.length + 2,
      text: "...",
      sender: "bot",
      isTyping: true
    };
    
    setMessages(prev => [...prev, typingMessage]);
    
    try {
      // Call the API with the user's message
      const res = await axios.post("http://127.0.0.1:8000/api/chatbot/", { 
        question: inputMessage.trim() 
      });
      
      // Replace the typing indicator with the actual response
      const botResponse = {
        id: messages.length + 2,
        text: res.data.response,
        sender: "bot"
      };
      
      setMessages(prev => prev.map(msg => 
        msg.isTyping ? botResponse : msg
      ));
    } catch (err) {
      // Handle error and update UI
      setError("Failed to fetch response. Please try again.");
      
      // Replace typing indicator with error message
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I couldn't process your request. Please try again.",
        sender: "bot",
        isError: true
      };
      
      setMessages(prev => prev.map(msg => 
        msg.isTyping ? errorMessage : msg
      ));
    }
    
    // Clear input and set loading to false
    setInputMessage('');
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {minimized ? (
        // Enhanced minimized view with attractive styling and animation
        <div className="fixed bottom-4 right-4">
          <button 
            onClick={toggleMinimize}
            className={`w-16 h-16 rounded-full focus:outline-none shadow-xl relative transition-all duration-300 transform hover:scale-110 ${isPulsing ? 'animate-pulse' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #4299e1, #3182ce)',
              border: '2px solid white'
            }}
          >
            {/* Animated rings around the button */}
            <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-blue-500" style={{ animationDuration: '3s' }}></div>
            
            {/* Inner content */}
            <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center p-2 bg-blue-500">
              <img 
                src={Botlogo} 
                alt="GenixBot" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Small notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
          </button>
        </div>
      ) : (
        // Normal chat interface when not minimized
        <div className="w-200 rounded-2xl overflow-hidden shadow-xl bg-white fixed bottom-4 right-4">
          {/* Header */}
          <div className="bg-blue-600 p-3 relative flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <img src={Botlogo} alt="GenixBot" className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="flex items-center">
                  <h2 className="font-bold">GenixBot</h2>
                  <span className="ml-1 text-xs bg-grey bg-opacity-20 rounded px-1">AI</span>
                </div>
                <p className="text-xs text-white text-opacity-90">AI-Powered Finance, Just for You!</p>
              </div>
            </div>
            
            {/* Close button */}
            <button 
              onClick={toggleMinimize} 
              className="text-white hover:bg-blue-700 rounded p-1"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
          
          {/* Chat Area */}
          <div className="h-80 overflow-y-auto p-3 bg-white">
            {messages.map((message) => (
              <div key={message.id} className={`mb-3 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block rounded-lg py-2 px-3 max-w-xs ${
                  message.sender === 'user' 
                    ? 'bg-blue-100 text-blue-800' 
                    : message.isError
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                }`}>
                  {message.isTyping ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  ) : (
                    message.text
                  )}
                </div>
              </div>
            ))}
            
            {/* Error message display */}
            {error && (
              <div className="text-center text-xs text-red-500 mb-2">{error}</div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-200">
            <div className="flex items-center px-3 py-2">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type here"
                className="flex-1 border-0 outline-none text-gray-600 bg-gray-100 rounded-full px-4 py-2 text-sm"
                disabled={loading}
              />
              <button 
                onClick={handleSendMessage}
                className={`ml-2 w-8 h-8 rounded-full ${loading ? 'bg-gray-400' : 'bg-green-600'} flex items-center justify-center text-white`}
                disabled={loading}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="flex justify-around border-t border-gray-200 text-xs">
            <button 
              className={`flex flex-col items-center py-2 px-4 ${activeTab === 'chat' ? 'text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('chat')}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Chat
            </button>
            <button 
              className={`flex flex-col items-center py-2 px-4 ${activeTab === 'voice' ? 'text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('voice')}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
              Voice
            </button>
            <button 
              className={`flex flex-col items-center py-2 px-4 ${activeTab === 'history' ? 'text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('history')}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              History
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenixBotUI;