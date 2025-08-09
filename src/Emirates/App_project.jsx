import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './Admin';
import FlightList from './FlightList';
import Flight_detail from './Flight_detail';
import './App_project.css'
import Navbar from './Navbar';

function App_project() {
  const [currentPage, setCurrentPage] = useState('admin');
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div>
      {/* {currentPage === 'admin' && <Admin />}
      {currentPage === 'list' && (
        <FlightList onSelect={(flight) => {
          setSelectedFlight(flight);
          setCurrentPage('detail');
        }} />
      )}
      {currentPage === 'detail' && (
        <Flight_detail flight={selectedFlight} onBack={() => setCurrentPage('list')} />
      )}

      {}
      <div className="page-navigation">
        <button onClick={() => setCurrentPage('admin')}>Manager Page</button>
        <button onClick={() => setCurrentPage('list')}>Flight List</button>
      </div> */}
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Admin/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/flightlist" element={<FlightList/>}/>
              <Route path="/flightdetail" element={<Flight_detail/>}/>
          </Routes>
      </Router>

    </div>
  );
}

export default App_project;
