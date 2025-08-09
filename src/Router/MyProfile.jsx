import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import avatar from '../Router/me.jpg';
import './MyProfile.css';

function MyProfile() {
    const navigate = useNavigate();
    return(
        <div className="profile-page">
            <img src={avatar} alt="Merey's Avatar" className="avatar"/>
            
            <h1> Merey Yermakhan</h1>
            <p><strong>Email:</strong> ermahan.merei@icloud.com</p>
            <p><strong>Location:</strong> Almaty, Kazakhstan</p>
            <p><strong>Univercity:</strong> International Information Technology Univercity (IITU)</p>
            <p><strong>Degree Program:</strong> Information Systems, bachelor degree (2021-2025)</p>
            <p><strong>Academy:</strong> Amjilt Cyber Academy</p>
            <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, SQL, Python, OOP</p>
            <p><strong>Soft skills:</strong> Fast learner, able to work in a team, good time management, responsible, and creative</p>
            <p><strong>Languages:</strong> Kazakh(native), Russian (fluent), English (intermediate)</p>
            <p><strong>Goal:</strong> My future goal is to become a strong specialist in Full-stack development, work on large-scale projects, and gain international experience.</p>

            <button onClick={() => navigate('/my_projects')}>Go to My Projects</button>
        </div>
    )
}

export default MyProfile