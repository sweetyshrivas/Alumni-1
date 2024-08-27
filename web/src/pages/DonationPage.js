import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add donation logic here
  };

  return (
    <div className="donation-page">
      <h1>Make a Donation</h1>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="amount">Donation Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationPage;
