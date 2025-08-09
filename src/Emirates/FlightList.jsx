import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FlightList.css';

function FlightList({ onSelect }) {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://6856fb5721f5d3463e543028.mockapi.io/users/flights')
      .then((res) => setFlights(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(search.toLowerCase()) ||
      flight.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flight-list-container">
      <h2 className="title">Available Flights</h2>
      <input
        type="text"
        placeholder="Search by city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="flights">
        {filteredFlights.map((flight) => (
          <div
            key={flight.id}
            className="flight-card"
            onClick={() => navigate(('/flightdetail'))}
          >
            <p>
              <strong>{flight.from}</strong> → <strong>{flight.to}</strong>
            </p>
            <p>Time: {flight.time}</p>
            <p>Price: ${flight.price}</p>
            <p>Seats: {flight.number_of_seats}</p>
            <p>Airline: {flight.airline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightList;