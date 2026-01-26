import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import HowItWorks from "./pages/HowItWorks";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const { i18n } = useTranslation();
  const [dir, setDir] = useState("rtl");

  useEffect(() => {
    setDir(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <div dir={dir} className="min-h-screen bg-gray-100">
      <HashRouter>
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/method" element={<Methodology />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/assess" element={<Assessment />} />
            <Route path="/result" element={<Result />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}
