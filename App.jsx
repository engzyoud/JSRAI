import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Layout from './pages/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Methodology from './pages/Methodology'
import Assessment from './pages/Assessment'
import Result from './pages/Result'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Disclaimer from './pages/Disclaimer'
import Scope from './pages/Scope'
import Limitations from './pages/Limitations'

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how" element={<HowItWorks />} />
          <Route path="method" element={<Methodology />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="result" element={<Result />} />
          <Route path="about" element={<About />} />
          <Route path="scope" element={<Scope />} />
          <Route path="limitations" element={<Limitations />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
        </Route>
      </Routes>
    </LangProvider>
  )
}
