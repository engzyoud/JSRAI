import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { translations } from "./i18n";
import Home from "./pages/Home";
import Methodology from "./pages/Methodology";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <BrowserRouter>
      <Header lang={lang} setLang={setLang} t={t} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/methodology" element={<Methodology t={t} />} />
          <Route path="/quiz" element={<Quiz t={t} lang={lang} />} />
          <Route path="/result" element={<Result t={t} />} />
          <Route path="/privacy" element={<Privacy t={t} />} />
          <Route path="/disclaimer" element={<Disclaimer t={t} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer t={t} />
    </BrowserRouter>
  );
}

export default App;
