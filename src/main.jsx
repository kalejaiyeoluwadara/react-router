import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/**
 * BrowserRouter is the parent component that enables routing in your React app.
 * It must wrap your entire App component to enable the routing functionality.
 * 
 * BrowserRouter uses the HTML5 History API to keep your UI in sync with the URL.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
