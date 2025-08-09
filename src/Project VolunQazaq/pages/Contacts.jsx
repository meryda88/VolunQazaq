import React from 'react';
import './Contacts.css';
import mapImage from './map.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
  <div className="contact-map">
    <iframe
      title="map"
      className="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.97846340673!2d76.93262317598001!3d43.25187317112398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb25d6bf077%3A0x3f97efa00680326d!2z0YPQu9C40YbQsCDQnNCw0YPQu9C10L3QvtCy0LAgOTIsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1754322946327!5m2!1sru!2skz"
      allowFullScreen
    ></iframe>
  </div>

      <div className="contact-info">
        <h2>Связаться с нами</h2>

        <div className="info-item">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <span>+7 (771) 276 00 90</span>
        </div>

        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>volunqazaq@gmail.com</span>
        </div>

        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>г. Алматы, ул. Мауленова, 92</span>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/_meryda?igsh=MWVkNWE3bHF5ZXBiOQ=="><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://t.me/meryluvvv"><FontAwesomeIcon icon={faTelegramPlane} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
