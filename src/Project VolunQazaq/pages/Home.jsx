import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // для перехода
import axios from 'axios';
import './Home.css';

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://6856fb5721f5d3463e543028.mockapi.io/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error('Ошибка загрузки событий:', err));
  }, []);

  const getUpcomingEvents = (events) => {
    const now = new Date();
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(now.getDate() + 7);

    const normalizeDate = (dateStr) => {
      const dateOnly = dateStr.includes('T') ? dateStr.split('T')[0] : dateStr;
      return new Date(dateOnly);
    };

    return events
      .map(event => ({
        ...event,
        parsedDate: normalizeDate(event.date)
      }))
      .filter(event =>
        event.parsedDate >= now && event.parsedDate <= oneWeekFromNow
      )
      .sort((a, b) => a.parsedDate - b.parsedDate)
      .slice(0, 4);
  };

  return (
    <div className="home-page">
      <section className="main">
        <h1>Стань частью движения, которое меняет мир!</h1>
        <p>Участвуй в волонтёрских проектах в своём городе и делай добро.</p>
        <div className="main-buttons">
          <button className="btn btn1" onClick={() => navigate('/events')}>Присоединиться</button>
          <button className="btn btn2" onClick={() => navigate('/about')}>О нашей платформе</button>
        </div>
      </section>

      <section className="events">
        <h2>Предстоящие мероприятия</h2>
        <div className="event-cards">
          {getUpcomingEvents(events).map(event => (
            <div
              className="event-card"
              key={event.id}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/events')}
            >
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p><strong>Дата:</strong> {new Date(event.date).toLocaleString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
                <p><strong>Количество мест:</strong> {event.slots}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
