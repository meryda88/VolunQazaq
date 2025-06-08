import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Ternary from './Ternary.jsx'
// import Authentication from './Authentication.jsx'
// import To_do_list from './To_do_list.jsx'
// import Movie_app from './movie_app'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
