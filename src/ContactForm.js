import React, { useState } from "react";
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="main-container">
      <h1 className="heading">Contact Us</h1>
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="input-container">
          <label className="name" htmlFor="name-input">Name</label>
          <input
            type="text"
            name="name"
            id="name-input"
            className="name-input"
            placeholder="Ravi.."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email-input" className="name">Email</label>
          <input
            type="email"
            name="email"
            id="email-input"
            className="name-input"
            placeholder="ravi123@gmail.com.."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="message-input" className="name">Message</label>
          <textarea
            name="message"
            id="message-input"
            className="message-input"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
