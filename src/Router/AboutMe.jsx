import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          Hi! My name is <strong>Merey Yermakhan</strong>. I'm from Almaty, Kazakhstan and currently a 4th-year student majoring in Information Technology. I'm deeply passionate about frontend and full-stack development.
        </p>

        <p>
          My biggest motivation is creating web applications that are both useful and visually pleasing. I enjoy exploring new technologies, working with UI/UX design, and turning creative ideas into real code.
        </p>

        <p>
          In my free time, I love reading, watching TV series, making aesthetic Reels and Stories, taking care of my wellness, and living a mindful lifestyle. I also run my own Telegram channel where I share thoughts, favorite music, and moments that inspire me
        </p>

        <button onClick={() => navigate("/my_profile")}>Go to My Profile</button>
      </div>
    </div>
  );
}

export default AboutMe;
