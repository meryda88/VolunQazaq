import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from "./MyProfile";
import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";

function HwRouter() {
  return (
    <Router>
        <Routes>
      <Route path="/" element={<MyProfile />} />
      <Route path="/my_profile" element={<MyProfile />} />
      <Route path="/my_projects" element={<MyProjects />} />
      <Route path="/about_me" element={<AboutMe />} />
    </Routes>
    </Router>
   
  );
}

export default HwRouter
