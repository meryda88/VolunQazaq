import React from 'react';
import './Flight_detail.css';

function Flight_detail({ flight, onBack }) {
  if (!flight) return null;

  return (
    <div className="flight-detail-container">
      <h2 className="title">Flight Detail</h2>
      <div className="flight-info">
        <p><strong>From:</strong> {flight.from}</p>
        <p><strong>To:</strong> {flight.to}</p>
        <p><strong>Time:</strong> {flight.time}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
        <p><strong>Seats:</strong> {flight.number_of_seats}</p>
        <p><strong>Airline:</strong> {flight.airline}</p>
      </div>
      <button className="back-icon-button" onClick={onBack}>⬅</button>
      </div>
  );
}

export default Flight_detail;
