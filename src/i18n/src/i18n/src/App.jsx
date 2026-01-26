import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Methodology from "./pages/Methodology";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { i18n } = useTranslation();
  const [dir, setDir] = useState("rtl");

  useEffect(() => {
    setDir(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <div dir={dir} className="min-h-screen bg-[#0b1020] text-white">
      <BrowserRouter>
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how" element={<HowItWorks />} />
            <Route path="/method" element={<Methodology />} />
            <Route path="/assess" element={<Assessment />} />
            <Route path="/result" element={<Result />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
