import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Methodology from './pages/Methodology'
import Assessment from './pages/Assessment'
import Result from './pages/Result'
import About from './pages/About'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/method" element={<Methodology />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </Routes>
  )
}
