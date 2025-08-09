import React from "react";
import {useNavigate} from 'react-router-dom';

function Login({setAuth}) {
    const navigate = useNavigate()
    function handleLogin() {
        setAuth(true)
        navigate('/dashboard')
    }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Login;