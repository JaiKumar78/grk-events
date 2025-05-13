import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EventContextProvider>
        <App />
      </EventContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
