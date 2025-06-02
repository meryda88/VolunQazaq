import React, { useState } from "react";
import './authentication.css'
function Authentication() {
    const [page, setPage] = useState('first_page')

    if(page === 'first_page') {
        return (
            <div className="authentication">
                <h1>Жүйеге кіру қажет</h1>
                <button className="btn_login" onClick={() => setPage('login')}>Login</button>
                <button className="btn_regis1" onClick={() => setPage('register')}>Register</button>
            </div>
        )
    }
    else if(page==='login'){
        return(
            <div className="login">
                <h1>Бастапқы бетке қош келдіңіз</h1>
                <button className="btn_logout" onClick={() => setPage('first_page')}>Log out</button>
            </div>
        )
    }
    else if(page==='register'){
        return(
            <div className="register">
                <h1>Register Form</h1>
                <input type="text" placeholder="Enter email or number"/>
                <input type="password" placeholder="Enter your password"/>
                <button className="btn_regis2" onClick={() => setPage('first_page')}>Register</button>
            </div>
        )
    }
}

export default Authentication

