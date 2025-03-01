import React, { useState } from 'react';
import Botlogo from "../assets/Images/botlogo.jpg";
import { X } from "lucide-react";

const GenixBotUI = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm GenixBot, your friendly AI Agent here to help with finance. How can I assist you?", sender: "bot" }
  ]);
  const [activeTab, setActiveTab] = useState('chat');
  // Add new state for minimized status
  const [minimized, setMinimized] = useState(false);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Add toggle function for minimize/maximize
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage.trim(),
      sender: "user"
    };
    
    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "I'm processing your financial query. How else can I help you today?",
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className={`${minimized ? 'w-16 h-16' : 'w-80'} rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-300 fixed bottom-4 right-4`}>
        {/* Header */}
        <div className="bg-blue-600 p-3 relative flex items-center justify-between">
          {!minimized && (
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {/* This would be your custom logo, using a placeholder for now */}
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    {/* Logo would go here */}
                     < img src={Botlogo} alt="GenixBot" className="w-full h-full object-cover"/>
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
          )}
          
          {/* Minimize/Maximize button */}
          <button 
            onClick={toggleMinimize} 
            className="text-white hover:bg-blue-700 rounded p-1"
          >
            {minimized ? (
                <>
                {console.log("Minimized")}
             <img src={Botlogo} alt="GenixBot" className="w-5 h-5 object-cover" />
             
             </>
            ) : (
                <>
                {console.log("Not Minimized")}
      <X className="w-5 h-5 text-gray-700" />
      </>
            )}
          </button>
        </div>
        
        {/* Only show these sections when not minimized */}
        {!minimized && (
          <>
            {/* Chat Area */}
            <div className="h-64 overflow-y-auto p-3 bg-white">
              {messages.map((message) => (
                <div key={message.id} className={`mb-3 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block rounded-lg py-2 px-3 max-w-xs ${
                    message.sender === 'user' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
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
                />
                <button 
                  onClick={handleSendMessage}
                  className="ml-2 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
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
          </>
        )}
      </div>
    </div>
  );
};

export default GenixBotUI;