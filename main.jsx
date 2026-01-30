import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LangProvider } from './context/LangContext'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LangProvider>
  </React.StrictMode>
)
