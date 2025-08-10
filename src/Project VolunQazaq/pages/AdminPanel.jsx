import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("events"); // "events" или "requests"
  const [showPopup, setShowPopup] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    city: "",
    date: "",
    slots: "",
    image: "",
    location: "",
    description: "",
    motivation: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [requests, setRequests] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  const navigate = useNavigate();

  const fetchRequests = async () => {
    try {
      const res = await axios.get("https://6856fb5721f5d3463e543028.mockapi.io/users/users");
      setRequests(res.data);
    } catch (err) {
      console.error("Ошибка при получении запросов", err);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://6856fb5721f5d3463e543028.mockapi.io/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Ошибка при получении событий", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const formatEventData = (data) => {
    const formattedDescription = Array.isArray(data.description)
      ? data.description
      : data.description
          .split(",")
          .map(item => item.trim())
          .filter(item => item);

    let formattedDate = data.date;
    try {
      const parsedDate = new Date(data.date);
      if (!isNaN(parsedDate.getTime())) {
        formattedDate = parsedDate.toISOString().split("T")[0];
      }
    } catch {
      formattedDate = data.date;
    }

    return {
      ...data,
      description: formattedDescription,
      date: formattedDate,
    };
  };

  const handleAddEvent = async () => {
    try {
      const formatted = formatEventData(eventData);

      if (!formatted.title || !formatted.city || !formatted.date) {
        alert("Пожалуйста, заполните обязательные поля: название, город и дата");
        return;
      }

      if (isEditing && editId) {
        await axios.put(`https://6856fb5721f5d3463e543028.mockapi.io/events/${editId}`, formatted);
        alert("Событие успешно обновлено!");
      } else {
        await axios.post("https://6856fb5721f5d3463e543028.mockapi.io/events", formatted);
        alert("Событие успешно добавлено!");
      }

      setShowPopup(false);
      setEventData({
        title: "",
        city: "",
        date: "",
        slots: "",
        image: "",
        location: "",
        description: "",
        motivation: ""
      });
      setIsEditing(false);
      setEditId(null);
      fetchEvents();
    } catch (error) {
      console.error("Ошибка при добавлении/обновлении события", error);
    }
  };

  const handleEdit = (event) => {
    setEventData({
      ...event,
      description: Array.isArray(event.description)
        ? event.description.join(", ")
        : event.description
    });
    setShowPopup(true);
    setIsEditing(true);
    setEditId(event.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Вы уверены, что хотите удалить это событие?")) {
      try {
        await axios.delete(`https://6856fb5721f5d3463e543028.mockapi.io/events/${id}`);
        fetchEvents();
      } catch (error) {
        console.error("Ошибка при удалении события", error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  // Фильтрация и пагинация
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="admin-panel">
      <div className="admin-topbar">
        <h1>Админ панель</h1>
        <button className="logout-btn" onClick={handleLogout}>Выйти</button>
      </div>
      <div className="tabs">
        <span 
          className={activeTab === "events" ? "active" : ""} 
          onClick={() => setActiveTab("events")}
        >
          События
        </span>
        <span> / </span>
        <span 
          className={activeTab === "requests" ? "active" : ""} 
          onClick={() => setActiveTab("requests")}
        >
          Заявки
        </span>
      </div>

      {activeTab === "events" && (
        <section className="admin-section">
          <div className="admin-header">
            <h2>События</h2>
            <input
              type="text"
              placeholder="Поиск по названию или городу..."
              className="event-search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button className="add-btn" onClick={() => setShowPopup(true)}>+ Добавить</button>
          </div>

          {currentEvents.length === 0 ? (
            <p>Нет подходящих событий</p>
          ) : (
            <div className="event-list">
              {currentEvents.map((event) => (
                <div key={event.id} className="event-row">
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p><strong>Город:</strong> {event.city}</p>
                    <p><strong>Дата:</strong> {event.date}</p>
                    <p><strong>Количество мест:</strong> {event.slots}</p>
                    <p><strong>Адрес:</strong> {event.location}</p>
                    <p><strong>Мотивация:</strong> {event.motivation}</p>
                  </div>
                  <div className="event-actions">
                    <button onClick={() => handleEdit(event)}>Изменить</button>
                    <button onClick={() => handleDelete(event.id)}>Удалить</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Назад</button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Вперёд</button>
            </div>
          )}
        </section>
      )}

      {activeTab === "requests" && (
        <section className="admin-section">
          <h2>Заявки на мероприятия</h2>
          {requests.length === 0 ? (
            <p>Нет заявок</p>
          ) : (
            <div className="registration-table">
              <table>
                <thead>
                  <tr>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Телефон</th>
                    <th>Место учёбы/работы</th>
                    <th>Мероприятие</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr key={req.id}>
                      <td>{req.name}</td>
                      <td>{req.birthdate}</td>
                      <td>{req.phone}</td>
                      <td>{req.place}</td>
                      <td>{req.eventTitle || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <h3>{isEditing ? "Редактировать событие" : "Новое событие"}</h3>
            <input name="title" placeholder="Название" value={eventData.title} onChange={handleInputChange} />
            <input name="city" placeholder="Город" value={eventData.city} onChange={handleInputChange} />
            <input name="date" type="date" placeholder="Дата" value={eventData.date} onChange={handleInputChange} />
            <input name="slots" placeholder="Количество мест" value={eventData.slots} onChange={handleInputChange} />
            <input name="image" placeholder="Ссылка на изображение" value={eventData.image} onChange={handleInputChange} />
            <input name="location" placeholder="Адрес" value={eventData.location} onChange={handleInputChange} />
            <input name="description" placeholder="Описание (через запятую)" value={eventData.description} onChange={handleInputChange} />
            <input name="motivation" placeholder="Мотивация" value={eventData.motivation} onChange={handleInputChange} />
            <div className="popup-actions">
              <button onClick={handleAddEvent}>{isEditing ? "Сохранить изменения" : "Сохранить"}</button>
              <button onClick={() => setShowPopup(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
