// src/pages/UpdateInfoPage.js
import React, { useState } from 'react';
import './UpdateInfoPage.css';

const UpdateInfoPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email.');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid phone number.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Information Updated:', { name, email, phone });
      // Add update logic here
    }
  };

  return (
    <div className="update-info-page">
      <h1>Update Information</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="info-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateInfoPage;
