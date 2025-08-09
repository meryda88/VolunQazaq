import React from "react";
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    function log() {
        navigate('/about')
    }
    return(
        <div>
            <p>Welcome to Home</p>
            <button onClick={log}>about</button>
        </div>
    )
}

export default Home;