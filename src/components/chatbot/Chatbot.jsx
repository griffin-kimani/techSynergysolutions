import React, { useState } from "react";
import './chatbot.css'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    question: "",
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.question) {
      setIsFormSubmitted(true);
      setTimeout(() => {
        alert("Form submitted! We will get back to you shortly.");
      }, 500);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <div className={`chatbot-icon ${isOpen ? "open" : ""}`} onClick={toggleChat}>
          <span>💬</span>
        </div>
      )}
      {isOpen && !isFormSubmitted && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>Chat with us, we are online!</h3>
            <button onClick={toggleChat} className="close-btn">✖️</button>
          </div>
          <div className="chatbot-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="question">Question</label>
                <textarea
                  id="question"
                  name="question"
                  placeholder="What would you like to ask?"
                  value={userDetails.question}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      {isOpen && isFormSubmitted && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h3>TechSynergy Assistant</h3>
            <button onClick={toggleChat} className="close-btn">✖️</button>
          </div>
          <div className="chatbot-messages">
            <div className="message bot">
              <div className="message-text">
                Thank you for your message, {userDetails.name}! We will get back to you shortly.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
