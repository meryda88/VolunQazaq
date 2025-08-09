import React, { useEffect, useState } from "react";
import axios from "axios";
import './Events.css';
import JoinModal from "./JoinModal";

const cities = ["Алматы", "Астана", "Шымкент"];

const Events = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false); // ✅ переместила сюда

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
        <div className="city-select-wrapper">
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
              onClick={() => setSelectedEvent(event)}
            >
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p><strong>Дата:</strong> {event.date}</p>
                <p><strong>Количество мест:</strong> {event.slots}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Модалка регистрации на событие */}
      {showJoinModal && selectedEvent && (
        <JoinModal
          eventId={selectedEvent.id}
          eventTitle={selectedEvent.title}
          onClose={() => {
            setShowJoinModal(false);
            setSelectedEvent(null); // Закрываем также и окно ивента
          }}
        />
      )}

      {/* ✅ Модалка просмотра ивента */}
      {selectedEvent && !showJoinModal && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>&times;</button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
            <h3>{selectedEvent.title}</h3>
            <p><strong>Дата:</strong> {selectedEvent.date}</p>
            <p><strong>Количество мест:</strong> {selectedEvent.slots}</p>
            <p><strong>Адрес:</strong> {selectedEvent.location}</p>
            <div>
              <strong>Что будем делать:</strong>
              <ul>
                {Array.isArray(selectedEvent.description) && selectedEvent.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="event-motivation">“{selectedEvent.motivation}”</p>
            <div className="modal-buttons">
              <button className="btn1" onClick={() => setShowJoinModal(true)}>Присоединиться</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
