import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Events.css';

const cities = ["Алматы", "Астана", "Шымкент"];

const Events = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://6856fb5721f5d3463e543028.mockapi.io/events");
        setEvents(response.data);
        localStorage.setItem("events", JSON.stringify(response.data));
      } catch (error) {
        console.error("Ошибка при загрузке данных", error);
        const localData = localStorage.getItem("events");
        if (localData) setEvents(JSON.parse(localData));
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = selectedCity
    ? events.filter((event) => event.city === selectedCity)
    : events;

  return (
    <div className="events-page">
      <section className="events" id="events">
        <h2>Предстоящие мероприятия</h2>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <label>Выберите город: </label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Все города</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="event-cards">
          {filteredEvents.map((event) => (
            <div
              className="event-card"
              key={event.id}
              onClick={() => navigate(`/event/${event.id}`)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/event/${event.id}`);
                }
              }}
              role="button"
              aria-label={`Открыть подробности события ${event.title}`}
            >
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p><strong>Дата:</strong> {event.date}</p>
                <p><strong>Осталось:</strong> {event.slots}</p>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>События не найдены для выбранного города.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
