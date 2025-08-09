import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [res, setRes] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const [number_of_seats, setNumber_of_seats] = useState('');
  const [airline, setAirline] = useState('Emirates');

  const post_data = () => {
    if (!from || !to || !time || !price || !airline) {
      setRes('Please fill in all fields');
      return;
    }

    axios
      .post('https://6856fb5721f5d3463e543028.mockapi.io/users/flights', {
        from,
        to,
        time,
        price,
        number_of_seats,
        airline,
      })
      .then(() => {
        setRes('Flight added successfully!');
        setFrom('');
        setTo('');
        setTime('');
        setPrice('');
        setNumber_of_seats('');
        setAirline('Emirates');
      })
      .catch((error) => {
        setRes('Error: ' + error.message);
      });
  };

  return (
    <div className="flight-form-container">
      <h2 className="title">Flight Manager</h2>
      <div className="form-group">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          type="number"
          value={number_of_seats}
          onChange={(e) => setNumber_of_seats(e.target.value)}
          placeholder="Number of seats"
        />
        <input
          type="text"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          placeholder="Airline name"
        />
        <button onClick={post_data}>Add Flight</button>
        <p className="response">{res}</p>
      </div>
    </div>
  );
}

export default Admin;
