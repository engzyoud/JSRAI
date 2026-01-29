import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LangProvider } from './LangContext'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import './global.css'

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LangProvider>
  )
}

export default App
