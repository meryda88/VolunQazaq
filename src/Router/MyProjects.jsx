import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import noteApp from '../Router/images/9.jpg';
import flightApp from '../Router/images/8.jpg';
import galleryApp from '../Router/images/4.jpg';
import quickHireImg from '../Router/images/quickhire.png';
import allureModeImg from '../Router/images/alluremode.png';
import weatherAppImg from '../Router/images/weatherapp.png';
import dailyGlowImg from '../Router/images/6.jpg';
import readBooksImg from '../Router/images/7.jpg';
import './MyProjects.css';



function MyProjects() {
    const navigate = useNavigate();
    const projects = [
      {
        title: "Note App",
        description: "Күнделік стиліндегі заметка қосымшасы.",
        image: noteApp
      },
      {
        title: "Flight Booking",
        description: "Әуе рейстерін іздеп, брондау жүйесі.",
        image: flightApp
      },
      {
        title: "Photo Gallery",
        description: "Жеке суреттерді сақтап, көрсетуге арналған галерея-сайт.",
        image: galleryApp
      },
      {
        title: "QuickHire",
        description: "Интерактивті уақытша жұмыс табуға арналған дипломдық жоба.",
        image: quickHireImg
      },
      {
        title: "Allure Mode",
        description: "Әйелдер мен ерлер киіміне арналған сәнді интернет-дүкен.",
        image: allureModeImg
      },
      {
        title: "Weather App",
        description: "Қалалар бойынша ауа райын көрсететін қосымша.",
        image: weatherAppImg
      },
      {
        title: "Daily Glow",
        description: "Денсаулық пен өмір салтын бақылауға арналған фитнеске ұқсас.",
        image: dailyGlowImg
      },
      {
        title: "ReadBooks Tracker",
        description: "Оқылған кітаптарды сақтауға және бақылауға арналған.",
        image: readBooksImg
      }      
    ];

    return(
        <div className="project-page">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                <div className="project-card" key={index}>
                <img src={proj.image} alt={proj.title} />
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                </div>
                ))}
            </div>
            <button onClick={() => navigate('/about_me')}>Go to About Me</button>
        </div>
    )
}

export default MyProjects