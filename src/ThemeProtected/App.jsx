import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'
function App() {
    const[isAuth, setAuth] = useState(false)
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                    <Route path="/dashboard" element={
                        <ProtectedRoute isAuth={isAuth}>
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;