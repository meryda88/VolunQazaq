import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JoinModal.css';

const JoinModal = ({ eventId, eventTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    phone: '',
    place: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, birthdate, phone, place } = formData;

    if (!name || !birthdate || !phone || !place) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    try {
      await axios.post(
        'https://6856fb5721f5d3463e543028.mockapi.io/users/users',
        {
          ...formData,
          eventId,
          eventTitle,
          status: "pending"
        }
      );

      setFormData({
        name: '',
        birthdate: '',
        phone: '',
        place: '',
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      alert('Ошибка при отправке. Попробуйте позже.');
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>

        {!submitted ? (
          <form className="join-form" onSubmit={handleSubmit}>
            <h2>Добро пожаловать в команду!</h2>
            <p className="description">
              Лига Волонтеров — это команда единомышленников, объединённых желанием делать мир добрее. Заполните анкету, и мы передадим ваши данные координатору. Он свяжется с вами в течение 5 рабочих дней. Мы гарантируем конфиденциальность ваших данных.
            </p>

            <label>
              ФИО:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Дата рождения:
              <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
            </label>
            <label>
              Номер телефона:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
              Место учёбы / работы:
              <input type="text" name="place" value={formData.place} onChange={handleChange} required />
            </label>
           

            <button type="submit" className="submit-btn">Отправить</button>
          </form>
        ) : (
          <div className="thank-you">
            <h3>Заявка успешно отправлена!</h3>
            <p>Спасибо за регистрацию! Координатор свяжется с вами в течение 5 рабочих дней.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
