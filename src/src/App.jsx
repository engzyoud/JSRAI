import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
