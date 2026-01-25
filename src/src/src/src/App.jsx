import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tool from "./pages/Tool";
import Result from "./pages/Result";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";
import { ToolProvider } from "./context/ToolContext";

export default function App() {
  return (
    <LanguageProvider>
      <ToolProvider>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </ToolProvider>
    </LanguageProvider>
  );
}
