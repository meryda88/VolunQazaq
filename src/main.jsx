import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Ternary from './Ternary.jsx'
// import Authentication from './Authentication.jsx'
import To_do_list from './To_do_list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <To_do_list />
  </StrictMode>,
)
