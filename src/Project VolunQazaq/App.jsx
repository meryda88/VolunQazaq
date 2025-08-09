import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import Events from './pages/Events';
import AdminPanel from './pages/AdminPanel';
import Contacts from './pages/Contacts';
import ChatBot from './components/ChatBot';
import JoinModal from './pages/JoinModal';
import EventDetails from './pages/EventDetails';


function App() {
  const location = useLocation();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isAdmin");
    if (saved === "true") {
      setIsAdmin(true);
    }
  }, []);

  // Көрсетпеу керек беттер
  const hideNavbarFooterRoutes = ['/login', '/admin'];
  const hideNavbarFooter = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
          {isAdmin && <Route path="/admin" element={<AdminPanel setIsAdmin={setIsAdmin} />} />}
          <Route path="/join/:id" element={<JoinModal />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <ChatBot />}

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
